import { useState } from 'react';

const Exponential = () => {
    const [counter, setCounter] = useState(2)

    const handleExpo = () => {
        setCounter(counter** 2)
    }

    const handleRoot = () => {
        setCounter(Math.sqrt(counter))
    }

    return ( <div>

        <p>The count is: {counter}</p>
        <button onClick = {handleExpo}>Square (^2)</button>
        <button onClick = {handleRoot}>Square Root (√)</button>

        </div>

    )}

export default Exponential
