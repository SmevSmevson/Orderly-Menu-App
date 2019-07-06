import React, { useContext } from 'react'
import { OrderContext } from "../../ContextProviders/OrderContext";

const CustomerMenuRecieptTotal = () => {
    const { order } = useContext(OrderContext)
    let total = order.reduce((acc, item) => {
        return acc + (item.price * item.amount)
    }, 0)
	
	return (
        <div className="confirm-receipt-total">
            <span className="confirm-receipt-item-name">total</span>
            <span className="confirm-receipt-item-total">{total}</span>
        </div>
	)
}

export default CustomerMenuRecieptTotal
