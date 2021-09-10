import React from "react";

interface Props {
    readonly count: number
    readonly countIncrement: any
    readonly countDecrement: any
    readonly countReset: any
    readonly initialCount: number
}

export const Counter = (props: Props) => {
    return (
        <>
            <p>
                現在のカウント: <b>{props.count}</b>
                <br />
                count の初期値: <b>{props.initialCount}</b>
                <button onClick={props.countIncrement}>increment</button>
                <button onClick={props.countDecrement}>decrement</button>
                <button onClick={props.countReset}>reset</button>
            </p>
        </>
    )
}