"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = void 0;
var DEBUG_MODE = 1;
function debug(output) {
    if (DEBUG_MODE)
        console.log(output);
}
exports.debug = debug;
