import React, {useEffect, useState} from 'react';
import { RouteComponentProps } from '@reach/router'

import {Counter} from "views/components/Counter";
import {Hello} from "views/components/Hello";
import {useDispatch, useSelector} from "react-redux";
import actions from "state/ducks/counter/actions";
import {getCount} from "state/ducks/counter/selectors";


const INITIAL_COUNT = 0
const INITIAL_NAME = "JavaScript"

const HelloContainer = (props: RouteComponentProps) => {
    const count = useSelector(getCount)
    const dispatch = useDispatch();
    const countIncrement = () => dispatch(actions.increment())
    const countDecrement = () => dispatch(actions.decrement())
    const countReset = () => dispatch(actions.decrement())

    const [name, setName] = useState(INITIAL_NAME)
    const callbackFunc = () => {
        document.title = `[${name}] ${count} 回クリックされました`
    }
    useEffect(callbackFunc, [count, name])

    const handleChangeName = (e: any) => {
        setName(e.target.value)
    }

    return (
        <>
            <div className="App">
                <Counter
                    count={count}
                    countIncrement={countIncrement}
                    countDecrement={countDecrement}
                    countReset={countReset}
                    initialCount={INITIAL_COUNT}
                />
                <Hello
                    name={name}
                    initialName={INITIAL_NAME}
                    handleChangeName={handleChangeName}
                />
            </div>
        </>
    )
}

export default HelloContainer;
