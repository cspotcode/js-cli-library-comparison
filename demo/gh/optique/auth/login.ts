import * as o from "@optique/core";

export default o.command(
  "login",
  o.object({
    action: o.constant("login"),
    clipboard: o.option("-c", "--clipboard", {
      description: o.message`Copy one-time OAuth device code to clipboard`,
    }),
    gitProtocol: o.option("-p", "--git-protocol", o.string(), {
      description: o.message`The protocol to use for git operations on this host: {ssh|https}`,
    }),
    hostname: o.option("-h", "--hostname", o.string(), {
      description: o.message`The hostname of the GitHub instance to authenticate with`,
    }),
    insecureStorage: o.option("--insecure-storage", {
      description: o.message`Save authentication credentials in plain text instead of credential store`,
    }),
    scopes: o.multiple(
      o.option("-s", "--scopes", o.string(), {
        description: o.message`Additional authentication scopes to request`,
      }),
    ),
    skipSshKey: o.option("--skip-ssh-key", {
      description: o.message`Skip generate/upload SSH key prompt`,
    }),
    web: o.option("-w", "--web", {
      description: o.message`Open a browser to authenticate`,
    }),
    withToken: o.option("--with-token", {
      description: o.message`Read token from standard input`,
    }),
  }),
  {
    brief: o.message`Log in to a GitHub account`,
    description: o.message`Authenticate with a GitHub host.

The default hostname is github.com. This can be overridden using the --hostname flag.

The default authentication mode is a web-based browser flow. After completion, an authentication token will be stored securely in the system credential store.

Alternatively, use --with-token to pass in a personal access token (classic) on standard input.`,
  },
);
