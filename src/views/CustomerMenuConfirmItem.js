import React from 'react'
import CustomerMenuHeader from '../components/customerMenu/CustomerMenuHeader'
import CustomerMenuItemDetails from '../components/customerMenu/CustomerMenuItemDetails'

import OrderContextProvider from '../ContextProviders/OrderContext'
import AllergyContextProvider from '../ContextProviders/AllergyContext'

// eslint-disable-next-line no-unused-vars
const CustomerMenuConfirmItem = ({ navigate, location }) => {
	return (
		<div className="item-details-screen-layout">
			<AllergyContextProvider>
				<CustomerMenuHeader />
			</AllergyContextProvider>
			<OrderContextProvider>
				<CustomerMenuItemDetails
					item={location.state.item}
					editSet={location.state.editSet}
				/>
			</OrderContextProvider>
		</div>
	)
}

export default CustomerMenuConfirmItem
