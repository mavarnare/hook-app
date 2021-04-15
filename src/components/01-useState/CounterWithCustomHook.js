import React from 'react';
import { useCounter } from '../../hooks/useCounter'

import './counter.css';

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset} = useCounter(1);
    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr/>

            <button className="btn btn-primary" onClick={ () => increment() }>+ 1</button>
            <button className="btn btn-primary" onClick={ () => decrement() }>- 1</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
        </>
    )
}
