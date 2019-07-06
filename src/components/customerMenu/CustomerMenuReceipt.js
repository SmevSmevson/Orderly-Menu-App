import React from 'react'
import { navigate } from '@reach/router'
import CustomerMenuRecieptItemList from './CustomerMenuRecieptItemList'
import CustomerMenuRecieptTotal from './CustomerMenuRecieptTotal';

const CustomerMenuReceipt = () => {
	const CustomerMenuReceiptEvent = () => {
		navigate(`customer-menu/confirm-order`)
    }
    
	return (
        <div className="menu-receipt-container">
            selected items
            <CustomerMenuRecieptItemList showImg={false} />
            <CustomerMenuRecieptTotal />
            <button onClick={CustomerMenuReceiptEvent} className="menu-receipt-order">order</button>
        </div>
	)
}

export default CustomerMenuReceipt
