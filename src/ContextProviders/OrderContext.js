import React, { useReducer, createContext, useEffect, useRef } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import { orderReducer } from '../reducers/orderReducer'

// export const OrderContext = createContext(['order', () => {}])
export const OrderContext = createContext()

const OrderContextProvider = (props) => {
	const [order, dispatch] = useReducer(orderReducer, [], () => {
		const localData = localStorage.getItem('order')
		return localData ? JSON.parse(localData) : []
	})

	// This is the Alen AI Voice Assistant code
	const alanBtnInstance = useRef(null)

	useEffect(() => {
		if (!alanBtnInstance.current) {
			alanBtnInstance.current = alanBtn({
				key:
					'aecc28f8e0e569e76619721d5c8c8f232e956eca572e1d8b807a3e2338fdd0dc/stage',
				onCommand: (commandData) => {
					if (commandData.command === 'go:back') {
						//call client code that will react to the received command
					}

					if (commandData.command === 'ADD_ITEM') {
						dispatch({
							type: 'ADD_ITEM',
							order: commandData.data,
						})
					}

					if (commandData.command === 'REMOVE_ITEM') {
						dispatch({
							type: 'REMOVE_ITEM',
							order: commandData.data,
						})
					}
				},
			})
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order))
	}, [order])

	return (
		<OrderContext.Provider value={{ order, dispatch }}>
			{props.children}
		</OrderContext.Provider>
	)
}

export default OrderContextProvider
