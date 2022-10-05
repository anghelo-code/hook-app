import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  
    const {counter, increment, reset, decrement} = useCounter();

    return (
    <>
        <h2>Counter App with Custom Hook</h2>

        <h3>Counter : { counter }</h3>

        <hr/>

        <button className="btn btn-primary" onClick={ () => increment(2) } >+1</button>
        <button className="btn btn-primary" onClick={ reset } >reset</button>
        <button className="btn btn-primary" onClick={ () => decrement(2) } >-1</button>
    </>
    )
}
