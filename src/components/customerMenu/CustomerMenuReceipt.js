import React from 'react'
import { navigate } from '@reach/router'
import CustomerMenuRecieptItemList from './CustomerMenuRecieptItemList'

const CustomerMenuReceipt = () => {
	const CustomerMenuReceiptEvent = () => {
		navigate(`customer-menu/confirm-order`)
    }
    
	return (
        <div className="menu-receipt-container">
            selected items
            <CustomerMenuRecieptItemList showImg={false} />
            <div className="menu-receipt-total">
                <span className="menu-receipt-item-name">total</span>
                <span className="menu-receipt-item-total">¥ 20000</span>
            </div>
            <button onClick={CustomerMenuReceiptEvent} className="menu-receipt-order">order</button>
        </div>
	)
}

export default CustomerMenuReceipt
