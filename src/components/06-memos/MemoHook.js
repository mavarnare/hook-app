import React, { useState, useMemo } from 'react'
import "../02-useEffect/effects.css";
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {

    const { counter, increment } = useCounter( 1500 );
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            <p>{ memoProcesoPesado }</p>

            <button
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ms-3"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
