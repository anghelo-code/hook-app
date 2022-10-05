import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {
    console.log("hola soy goku")
  return (
    <button
        className='btn btn-primary mt-2'
        onClick={ ()=> increment(5) }
    >
        Increment
    </button>
  )
})
