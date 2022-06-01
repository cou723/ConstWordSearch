const DEBUG_MODE = 1;
export function debug(output: any) {
  if (DEBUG_MODE) console.log(output);
}
