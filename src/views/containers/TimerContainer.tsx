import React, {useEffect, useState} from 'react';
import { RouteComponentProps } from '@reach/router'
import {Counter} from "views/components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {getCount} from "../../state/ducks/counter/selectors";
import actions from "../../state/ducks/counter/actions";

const INITIAL_COUNT = 0

const Timer = (props: RouteComponentProps) => {
    const count = useSelector(getCount)
    const dispatch = useDispatch();
    const countIncrement = () => dispatch(actions.increment())
    const countDecrement = () => dispatch(actions.decrement())
    const countReset = () => dispatch(actions.reset())

    const callbackFunc = () => {
        alert('Start effect!')
        const timer = setInterval(countIncrement, 1000)
        return () => {
            console.log('Delete timer!')
            clearInterval(timer)
        }
    }
    useEffect(callbackFunc, [])

    return (
        <Counter
            count={count}
            countIncrement={countIncrement}
            countDecrement={countDecrement}
            countReset={countReset}
            initialCount={INITIAL_COUNT}
        />
    )
}

const TimerContainer = (props: RouteComponentProps) => {
    const [display, toggleDisplay] = useState(false)
    const handleToggleDisplay = () => {
        toggleDisplay(!display)
    }

    return (
        <>
            <button onClick={handleToggleDisplay}>
                {display ? 'タイマーを非表示': 'タイマーを表示'}
            </button>

            {display && <Timer />}
        </>
    )
}

export default TimerContainer