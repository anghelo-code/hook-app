import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const inputSelect = () =>{
        inputRef.current.select();
    }

  return (
    <>
      <h2>Focus Screen</h2>
      <hr/>

      <input 
        className="form-control"
        ref={ inputRef }
        type="text"
        placeholder="Enter a name" 
      />

        <button  
            className="btn btn-primary mt-2" 
            onClick={ ()=> inputSelect() }
        >
            select a input
        </button>
    </>
  )
}
