import DEBUG_MODE from "./app.js";

export function debug(output) {
  if (DEBUG_MODE) debug(output);
}
