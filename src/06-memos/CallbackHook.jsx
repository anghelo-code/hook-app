import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      (valueIncrement) => {
          
        setCounter( (val)=> val + valueIncrement)  
      },
      [],
    )
    


  return (
    <>
        <h2>Callback hook</h2>
        <hr/>

        <h4>Counter: { counter }</h4>

        <ShowIncrement  increment={ increment }/>
        
    </>
  )
}
