import { buildCommand } from "@stricli/core";

const myCommandInlineImplementation = buildCommand({
  // NOTE: must be an ARROW function for stricli to infer parameter types!
  func: async (_: {}) => {
    // Implementation here
  },

  parameters: {},
  docs: {
    brief: "Brief description of this command.",
  },
});

const myCommandLazyLoaded = buildCommand({
  // NOTE: must be an ARROW function for stricli to infer parameter types!
  // Type inference looks at loaded object.
  // (in this case, an object of the form {default: <function implementation>})
  // It correctly infers flag and argument types from the function.
  loader: () => import("./stricli-mycommand"),

  parameters: {},
  docs: {
    brief: "Brief description of this command.",
  },
});
