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

The endpoint argument should either be a path of a GitHub API v3 endpoint, or "graphql" to access the GitHub API v4.`,
  },
);
