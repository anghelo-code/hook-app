import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({height:0, width: 0});

  useLayoutEffect(() => {
      const { height, width } = pRef.current.getBoundingClientRect();
      setBoxSize({ height, width });
  }, [])


  return (
    <blockquote 
      className="blockquote text-end"
      style={{display: 'flex'}}  
    > 
        <p ref={ useRef } className="mb-1">  { quote }  </p>
        <footer className="blockquote-footer">{ author }</footer>
    </blockquote>
  )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
