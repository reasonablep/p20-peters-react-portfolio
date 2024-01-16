import  {useState} from 'react';

export const CounterOne = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(currentCount => currentCount +1)
    }

    const handleDecrement = () => {
        setCounter(currentCount => currentCount -1)
    }
    return (
        <div>
            <p>
                The count is: {counter}
            </p>
            <button onClick = {handleIncrement}>Add 1</button>
            <button onClick = {handleDecrement}>Subtract 1</button>
        </div>
    )
}

export default CounterOne