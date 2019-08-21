import React, { useReducer, createContext, useEffect } from 'react'
import { orderReducer } from "../reducers/orderReducer";

// export const OrderContext = createContext(['order', () => {}])
export const OrderContext = createContext()

const OrderContextProvider = (props) => {
    const [order, dispatch] = useReducer(orderReducer, [], () => {
        const localData = localStorage.getItem('order')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order))
    }, [order])

    return (
        <OrderContext.Provider value={{order, dispatch}}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider
