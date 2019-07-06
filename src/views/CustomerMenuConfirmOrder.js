import React from 'react'
import { navigate } from '@reach/router'
import CustomerMenuRecieptItemList from '../components/customerMenu/CustomerMenuRecieptItemList'
import OrderContextProvider from '../ContextProviders/OrderContext'

const CustomerMenuConfirmOrder = () => {
    const Proceed = () => {
		navigate(`/customer-menu/order-complete`)
    }
    const Back = () => {
		navigate(`/customer-menu`)
    }

	return (
        <div className="confirm-screen-layout">
            <OrderContextProvider>
                <div className="confirm-receipt-container">
                    <h3 className="confirm-receipt-title">
                        Confirm Order
                    </h3>
                    <CustomerMenuRecieptItemList showImg={true} />
                    <div className="confirm-receipt-total">
                        <span className="confirm-receipt-item-name">total</span>
                        <span className="confirm-receipt-item-total">¥ 20000</span>
                    </div>

                    <div className="confirm-receipt-buttons-container">
                        <button onClick={ Back } className="confirm-receipt-back">back</button>
                        <button onClick={ Proceed } className="confirm-receipt-order">order</button>
                    </div>
                </div>
            </OrderContextProvider>
        </div>
	)
}

export default CustomerMenuConfirmOrder
