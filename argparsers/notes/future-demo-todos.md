# Goals

Test these features:

- Quality of error messages

## Test Harness

*Note: the tests in this harness cannot pass or fail. Rather, the CLI's output is captured for human inspection and comparison*

Write test harness to run each competing CLI through these test cases:

Run bare
Run with --help
Run subcommand bare and with --help
Run `nested` group bare and with --help, does it describe the subcommands?
Run with validation error: missing required flag or option
Run with validation error: invalid flag value
Run with validation error: missing subcommand
Run with validation error: incorrectly named subcommand, similar to correct name (to demo levenshien distance)

For each output for each competing library, capture the output into a colorized HTML document. This means running the command in a tty, capturing stdout, passing it through an ANSI-to-HTML converter.

You'll end up with a matrix of outputs:
One dimension is the test case
Other dimension is the library used

Generate a single HTML UI that can visualize these outputs side-by-side. A single menu lets you choose the test case to view.
A two-column view shows output of one CLI vs another. Each column has a dropdown to choose the library to view for comparison.