import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from "../../hooks/useFetch";
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1);
    const { data, loading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote, author } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {   loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) 
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }

            <button
                className="btn btn-primary"
                onClick={ decrement }
            >
                    Previous quote
            </button>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                    Next quote
            </button>
            
        </div>
    )
}
