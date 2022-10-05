import { useState } from "react"

export const CounterApp = () => {

    const [{counter1, counter2, counter3}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });  

  return (
    <>
        <h1>Counter App</h1>

        <hr/>

        <h3>Counter1:  {counter1}</h3>
        <h3>Counter2:  {counter2}</h3>
        <h3>Counter3:  {counter3}</h3>

        <hr/>

        <button 
            className='btn'    
            onClick={
                () => setCounter((v) => ({...v, counter1: counter1 +1}))
            }    
        >+1</button>
    </>
  )
}
