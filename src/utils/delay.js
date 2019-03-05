export const delay = ms => new Promise(r => setTimeout(r, ms));
export const delayImmediate = () => new Promise(r => setImmediate(r));
