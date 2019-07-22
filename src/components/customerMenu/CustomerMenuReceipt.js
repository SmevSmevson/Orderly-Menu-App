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
            <CustomerMenuRecieptItemList showImg={false} />
            <CustomerMenuRecieptTotal />
            <button onClick={CustomerMenuReceiptEvent} className="menu-receipt-btn-order">order</button>
        </div>
	)
}

export default CustomerMenuReceipt
