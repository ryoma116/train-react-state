import produce, { Draft } from 'immer'
import types from './types'

export type CounterState = {
    count: number
}

const initialState: CounterState = {
    count: 0,
};

export const counterReducer = produce((draft: Draft<CounterState>, action) => {
    switch (action.type) {
        case types.INCREMENT:
            draft.count += 1
            break
        case types.DECREMENT:
            draft.count -= 1
            break
        case types.RESET:
            draft.count = 0
            break
    };
}, initialState)
