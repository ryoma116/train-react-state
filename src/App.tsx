import React, {useState} from 'react';


const INITIAL_COUNT = 0
const INITIAL_NAME = "JavaScript"

const SampleComponent = () => {
    const [count, setCount] = useState(INITIAL_COUNT)
    const [name, setName] = useState(INITIAL_NAME)
    const countIncrement = () => setCount((prevCount) => prevCount + 1)
    const countDecrement = () => setCount((prevCount) => prevCount - 1)
    const countReset = () => setCount(INITIAL_COUNT)

    const handleChangeName = (e: any) => {
        setName(e.target.value)
    }

    return (
        <div className="App">
            <p>
                現在のカウント: <b>{count}</b>
                <br />
                count の初期値: <b>{INITIAL_COUNT}</b>
                <button onClick={countIncrement}>increment</button>
                <button onClick={countDecrement}>decrement</button>
                <button onClick={countReset}>reset</button>
            </p>
            <p>
                Hello, <b>{name}</b> !!
                <br />
                name の初期値: <b>{INITIAL_NAME}</b>
            </p>

            <input type="text" onChange={handleChangeName} />
        </div>
    )
}

function App() {
    return (
        <>
            <SampleComponent />
            <SampleComponent />
        </>
    )
}

export default App;
