import {createStore, combineReducers} from 'redux'
import {reducers} from './ducks';

const rootReducer = combineReducers(reducers)

export default function configureStore() {
    const store = createStore(rootReducer)
    return store
}
