import t from "@bomb.sh/tab";

// Define your CLI structure
t.option("global-flag", "can be specified *before* the command");
const devCmd = t.command("dev", "Start development server");
devCmd.option(
  "port",
  "Specify port",
  (complete) => {
    complete("3000", "Development port");
    complete("8080", "Production port");
  },
  "p",
);
devCmd.argument(
  "shell",
  (complete, _options) => {
    complete("foo", "bar");
  },
  true,
);

// Handle completion requests
if (process.argv[2] === "complete") {
  const shell = process.argv[3];
  if (shell === "--") {
    const args = process.argv.slice(4);
    console.dir(args);
    t.parse(args);
  } else {
    t.setup("my-cli", "node my-cli.js", shell);
  }
}
