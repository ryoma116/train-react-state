import { CounterState } from './counter'
import { counterReducer } from "./counter/reducers";

export type StoreState = {
    counter: CounterState,
}

export const reducers = {
    counter: counterReducer,
}
