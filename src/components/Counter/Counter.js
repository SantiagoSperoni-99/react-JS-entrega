import { useState, useEffect } from 'react'

const Counter = ( { stock, initial, onAdd } ) => {

   // const state = useState(10)
    const [count, setCount] = useState(0)

    useEffect (() => {
        console.log('Funcion useEffect')
    }, [])


    const decrement = () => {
    //    state[1](state[0] - 1)
        if (count > initial) {
        setCount(count - 1)
        }
    }

    const increment = () => {
    //    state[1](state[0] + 1)
        if(count < 10){
            setCount(count + 1)
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    )

}

export default Counter