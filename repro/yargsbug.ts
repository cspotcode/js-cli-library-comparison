import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const parser = yargs(hideBin(process.argv))
  .scriptName("yargsbug")
  .env("YARGSBUG")
  .config({
    loglevel: "123",
  })
  .command("foo", "", (y) =>
    y
      .command("food", "", (y) => y)
      .command(
        "bar <rest...>",
        "",
        (y) =>
          y
            .option("config", {
              string: true,
            })
            .option("loglevel", {
              string: true,
            })
            .positional("rest", {
              array: true,
            }),
        (args) => console.dir(args),
      ),
  )
  .strict()
  .completion();

console.dir(await parser.parseAsync());

// Save to ./yargsbug.ts
// In lieu of a proper installation onto PATH:
//    alias yargsbug='bun ./yargsbug.ts'
// eval $(yargsbug completion)

// NOTE: I can't get it to reproduce in bash
// Typing yargsbug foo and pressing tab shows nothing, doesn't add a trailing space.
