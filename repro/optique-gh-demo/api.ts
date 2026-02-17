import * as o from '@optique/core';

export default o.command(
  'api',
  o.object({
    action: o.constant('api'),
    endpoint: o.argument(o.string(), {
      description: o.message`GitHub API endpoint path or "graphql"`,
    }),
    cache: o.option('--cache', o.string(), {
      description: o.message`Cache the response, e.g. "3600s", "60m", "1h"`,
    }),
    field: o.multiple(o.option('-F', '--field', o.string(), {
      description: o.message`Add a typed parameter in key=value format (use "@<path>" or "@-" to read value from file or stdin)`,
    })),
    header: o.multiple(o.option('-H', '--header', o.string(), {
      description: o.message`Add a HTTP request header in key:value format`,
    })),
    hostname: o.option('--hostname', o.string(), {
      description: o.message`The GitHub hostname for the request (default "github.com")`,
    }),
    include: o.option('-i', '--include', {
      description: o.message`Include HTTP response status line and headers in the output`,
    }),
    input: o.option('--input', o.string(), {
      description: o.message`The file to use as body for the HTTP request (use "-" to read from standard input)`,
    }),
    jq: o.option('-q', '--jq', o.string(), {
      description: o.message`Query to select values from the response using jq syntax`,
    }),
    method: o.option('-X', '--method', o.string(), {
      description: o.message`The HTTP method for the request (default "GET")`,
    }),
    paginate: o.option('--paginate', {
      description: o.message`Make additional HTTP requests to fetch all pages of results`,
    }),
    preview: o.multiple(o.option('-p', '--preview', o.string(), {
      description: o.message`Opt into GitHub API previews (names should omit '-preview')`,
    })),
    rawField: o.multiple(o.option('-f', '--raw-field', o.string(), {
      description: o.message`Add a string parameter in key=value format`,
    })),
    silent: o.option('--silent', {
      description: o.message`Do not print the response body`,
    }),
    slurp: o.option('--slurp', {
      description: o.message`Use with "--paginate" to return an array of all pages of either JSON arrays or objects`,
    }),
    template: o.option('-t', '--template', o.string(), {
      description: o.message`Format JSON output using a Go template; see "gh help formatting"`,
    }),
    verbose: o.option('--verbose', {
      description: o.message`Include full HTTP request and response in the output`,
    }),
  }),
  {
    brief: o.message`Make an authenticated GitHub API request`,
    description: o.message`Makes an authenticated HTTP request to the GitHub API and prints the response.

The endpoint argument should either be a path of a GitHub API v3 endpoint, or \`graphql\` to access the GitHub API v4.

Placeholder values \`{owner}\`, \`{repo}\`, and \`{branch}\` in the endpoint argument will get replaced with values from the repository of the current directory or the repository specified in the \`GH_REPO\` environment variable. Note that in some shells, for example PowerShell, you may need to enclose any value that contains \`{...}\` in quotes to prevent the shell from applying special meaning to curly braces.

The ${o.optionName("-p")}/${o.optionName("--preview")} flag enables opting into previews, which are feature-flagged, experimental API endpoints or behaviors. The API expects opt-in via the \`Accept\` header with format \`application/vnd.github.<preview-name>-preview+json\` and this command facilitates that via ${o.optionName("--preview")} \`<preview-name>\`. To send a request for the corsair and scarlet witch previews, you could use \`-p corsair,scarlet-witch\` or \`--preview corsair --preview scarlet-witch\`.

The default HTTP request method is \`GET\` normally and \`POST\` if any parameters were added. Override the method with ${o.optionName("--method")}.

Pass one or more ${o.optionName("-f")}/${o.optionName("--raw-field")} values in \`key=value\` format to add static string parameters to the request payload. To add non-string or placeholder-determined values, see ${o.optionName("-F")}/${o.optionName("--field")} below. Note that adding request parameters will automatically switch the request method to \`POST\`. To send the parameters as a \`GET\` query string instead, use ${o.optionName("--method")} GET.

The ${o.optionName("-F")}/${o.optionName("--field")} flag has magic type conversion based on the format of the value:

- literal values \`true\`, \`false\`, \`null\`, and integer numbers get converted to appropriate JSON types;
- placeholder values \`{owner}\`, \`{repo}\`, and \`{branch}\` get populated with values from the repository of the current directory;
- if the value starts with \`@\`, the rest of the value is interpreted as a filename to read the value from. Pass \`-\` to read from standard input.

For GraphQL requests, all fields other than \`query\` and \`operationName\` are interpreted as GraphQL variables.

To pass nested parameters in the request payload, use \`key[subkey]=value\` syntax when declaring fields. To pass nested values as arrays, declare multiple fields with the syntax \`key[]=value1\`, \`key[]=value2\`. To pass an empty array, use \`key[]\` without a value.

To pass pre-constructed JSON or payloads in other formats, a request body may be read from file specified by ${o.optionName("--input")}. Use \`-\` to read from standard input. When passing the request body this way, any parameters specified via field flags are added to the query string of the endpoint URL.

In ${o.optionName("--paginate")} mode, all pages of results will sequentially be requested until there are no more pages of results. For GraphQL requests, this requires that the original query accepts an \`$endCursor: String\` variable and that it fetches the \`pageInfo{ hasNextPage, endCursor }\` set of fields from a collection. Each page is a separate JSON array or object. Pass ${o.optionName("--slurp")} to wrap all pages of JSON arrays or objects into an outer JSON array.

For more information about output formatting flags, see \`gh help formatting\`.`,
  },
);
