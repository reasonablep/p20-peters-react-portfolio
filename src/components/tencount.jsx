import { useState } from 'react';

export const CounterTen= () => {
    const [counter, setCounter] = useState(0)

const handleIncrement = () => {
    setCounter(counter+10)
}
const handleDecrement = () => {
    setCounter(counter-10)
}

return (<div>
    <p>The count is:{counter}</p>
    <button onClick = {handleIncrement}>Increment (+10)</button>
<button onClick = {handleDecrement}>Decrement (-10)</button>

</div>
)}

export default CounterTen