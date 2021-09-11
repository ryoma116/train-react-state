import React, {useEffect, useState} from 'react';
import { RouteComponentProps } from '@reach/router'

const INITIAL_COUNT = 0

const Timer = (props: RouteComponentProps) => {
    const [count, setCount] = useState(INITIAL_COUNT)
    const countIncrement = () => {
        setCount((prevCount) => prevCount + 1)
        console.log('count up +1')
    }
    const countReset = () => setCount(INITIAL_COUNT)

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
        <div className="App">
            <p>現在のカウント数: {count}</p>
            <button onClick={countReset}>RESET</button>
        </div>
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