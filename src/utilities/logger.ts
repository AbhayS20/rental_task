/**
 * @description Logger Utility To Print in dev mode only
 * @param n
 */

export function log(...n: any) {
    if (process.env.mode === "devlopment") {
        console.log(...n);
    }
}
