import React from 'react'
import { navigate } from '@reach/router'
import CustomerMenuRecieptItemList from '../components/customerMenu/CustomerMenuRecieptItemList'
import CustomerMenuRecieptTotal from '../components/customerMenu/CustomerMenuRecieptTotal'
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
			<div className="confirm-receipt-container">
				<h3 className="confirm-receipt-title">Confirm Order</h3>

				<OrderContextProvider>
					<CustomerMenuRecieptItemList showImg={true} />
					<CustomerMenuRecieptTotal />
				</OrderContextProvider>

				<div className="confirm-receipt-buttons-container">
					<button onClick={Back} className="confirm-receipt-back">
						back
					</button>
					<button onClick={Proceed} className="confirm-receipt-order">
						order
					</button>
				</div>
			</div>
		</div>
	)
}

export default CustomerMenuConfirmOrder
