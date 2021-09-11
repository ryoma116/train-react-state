import types from "./types";

const increment = () => ({type: types.INCREMENT})
const decrement = () => ({type: types.DECREMENT})
const reset = () => ({type: types.RESET})

export default {
    increment: increment,
    decrement: decrement,
    reset: reset,
}
