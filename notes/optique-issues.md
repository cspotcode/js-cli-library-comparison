Issues or bug reports I have yet to file, jotting down here for now:

# Optique bug about nonexistent config, explicitly specified

```
# No config path specified. Default is `.prettierrc.json`, among other places, and nonexistence falls back to defaults

$ bun x prettier --check ./README.md
Checking formatting...
[warn] README.md
[warn] Code style issues found in the above file. Run Prettier with --write to fix.

###

# Config path explicitily specified. If the file does not exist, is an error

$ bun x prettier --config doesnotexist.json --check ./README.md
Checking formatting...
[error] Invalid configuration for file "G:\dev\@cspotcode\repros2\README.md":
[error] JSON Error in G:\dev\@cspotcode\repros2\doesnotexist.json:
[error] "undefined" is not valid JSON
```

# Optique bug report: .env file support makes env parser async?

https://github.com/dahlia/optique/issues/86

> Custom: Can read from .env files or other sources

# Follow-up to config-only parsing

https://github.com/dahlia/optique/issues/120

Thanks for fixing this so quickly.

`bindConfig(fail<string>(), {})` is certainly functional, but looks unusual from an API consumer's perspective. A consumer might be confused and wonder:

> Why am I repeating the `<string>` type when it's already specified in the config file schema?
> Why am I forced to write `fail()` when, from my perspective, I don't intend for anything to fail?

`fail()` is an internal implementation detail leaking into the API surface.

Given that the existing, straightforward API for parsing from options:
> I want to parse an option from argv, so I use `option()`

Why not expose the equivalent for config values?

> I want to parse a value from config file, so I use `config()`

`bindConfig(option())` is similar to `withDefault(option())`: wrap an inner parser with a fallback parser. For `withDefault()`, the fallback is a `constant()`. For `bindConfig()`, the fallback is `config()`. I can imagine similar existing for environment variables in the forthcoming `env` package.

What about a `fallback()` or `with()` API?

`fallback(option(), environment(), config())`

Showing that a parsed value can come from either --option, environment variable, or config file, in that order.

```typescript
withDefault(bindConfig(option(/*
  option stuff here
*/), {
  // config stuff here, is visually distant from `bindConfig` above
}), 'default value way down here, distant from `withDefault` call above')
```

Real-world example of things looking messy:

```typescript
  port: o.withDefault(
    oc.bindConfig(
      e.withEnv(o.option("--port", o.integer()), {
        name: "MYCLI_PORT",
      }),
      {
        context: configContext,
        key: (c) => c.port,
      },
    ),
    8080,
  ),
```

Alternative:
```typescript
port: fallback(
  o.option('--port', o.integer()),
  o.env({name: 'MYCLI_PORT'}),
  o.config({
    context: configContext,
    key: c => c.port
  }),
  o.default(3000)
)
```

# How to surface custom errors from stuff like configContext's `load()`

Scenario: using `configContext`, implement `load()` for custom file format and multi-file merging.
Want to raise an error so it is logged in the same way as, say, `Error: --port: Expected a valid port number, but got what.`
