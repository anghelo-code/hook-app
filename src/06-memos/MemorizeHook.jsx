import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStuff = ( interationNumber = 10 ) =>{
    for ( let i; i < interationNumber; i++){
        console.log('Londings the iteration...');
    }
    return `${interationNumber}`
}


export const MemorizeHook = () => {
    const { counter, increment } = useCounter(40)
    const [show, setShow] = useState(true)

    const memoHeavyStuff = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter:  <small>{ counter }</small> </h1>
        <hr/>

        <h3> Nro Iteracione: { memoHeavyStuff }</h3>

        <button
            className="btn btn-primary mt-2"
            onClick={ ()=> increment() }
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary mt-2"
            onClick={ () => setShow(!show) }
        >
            Show/Hide {JSON.stringify(show)}
        </button>

    </>
  )
}