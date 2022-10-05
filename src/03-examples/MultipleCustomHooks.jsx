import { useCounter , useFetch} from "../hooks/index";
import { LoandingQuote , Quote } from "./";

export const MultipleCustomHooks = () => {
    const {counter, increment} =  useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const {author, quote} = !!data && data[0];
    

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr/>

        {
            isLoading 
                ? (
                   <LoandingQuote/> 
                ) 
                :(
                   <Quote   author={ author }    quote= { quote }/>
                )
        }

        <button 
            className="btn btn-primary" 
            disabled={ isLoading } 
            onClick={ () => increment() }
        >
            next quote
        </button>
    </>
  )
}
