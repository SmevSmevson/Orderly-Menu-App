import React, { useContext } from 'react'
import CustomerMenuRecieptItem from './CustomerMenuRecieptItem'
import { OrderContext } from '../../ContextProviders/OrderContext'

const CustomerMenuRecieptItemList = ({ showImg }) => {
	const { order, dispatch } = useContext(OrderContext)

	return (
		<div className="menu-receipt-list-container">
			{order.map((item) => {
				return (
					<CustomerMenuRecieptItem
						key={item.id}
						item={item}
						dispatch={dispatch}
						showImg={showImg}
					/>
				)
			})}
		</div>
	)
}

export default CustomerMenuRecieptItemList
