import t from "@bomb.sh/tab";

const devCmd = t.command("dev", "Start development server");
devCmd
  .option(
    "port",
    "Specify port",
    (complete) => {
      complete("3000", "Development port");
      complete("8080", "Production port");
    },
    "p",
  )
  .argument(
    "command",
    (complete, options) => {
      complete("foo", "foo");
      complete("bar", "bar");
    },
    true,
  );

if (process.argv[2] === "complete") {
  const shell = process.argv[3];
  if (shell === "--") {
    const args = process.argv.slice(4);
    t.parse(args);
  } else {
    t.setup("mycli", "bun ./repro/bomb-tab-bug.ts", shell);
  }
}
