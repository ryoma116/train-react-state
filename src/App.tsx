import React, {useState} from 'react';
import {Counter} from "views/components/Counter";
import {Hello} from "views/components/Hello";


const INITIAL_COUNT = 0
const INITIAL_NAME = "JavaScript"

function App() {
    const [count, setCount] = useState(INITIAL_COUNT)
    const [name, setName] = useState(INITIAL_NAME)
    const countIncrement = () => setCount((prevCount) => prevCount + 1)
    const countDecrement = () => setCount((prevCount) => prevCount - 1)
    const countReset = () => setCount(INITIAL_COUNT)

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

export default App;
