import React, { useContext } from 'react'
import { OrderContext } from '../../ContextProviders/OrderContext'

const CustomerMenuRecieptTotal = () => {
	const { order } = useContext(OrderContext)
	let total = order.reduce((acc, item) => {
		return acc + item.price * item.amount
	}, 0)

	return (
		<div className="menu-receipt-total">
			<span className="menu-receipt-total-label">total</span>
			<span className="menu-receipt-total-value">{total}</span>
		</div>
	)
}

export default CustomerMenuRecieptTotal
