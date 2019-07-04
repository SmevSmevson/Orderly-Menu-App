import React from 'react'
import CustomerMenuHeader from "../components/customerMenu/CustomerMenuHeader";
import CustomerMenuItemDetails from "../components/customerMenu/CustomerMenuItemDetails";

const CustomerMenuConfirmItem = ({ navigate, location }) => {
	return (
        <div className="item-details-screen-layout">
            <CustomerMenuHeader />
            <CustomerMenuItemDetails item={location.state.item} />
        </div>
	)
}

export default CustomerMenuConfirmItem
