import React from 'react'
import CustomerMenuHeader from "../components/customerMenu/CustomerMenuHeader";
import CustomerMenuItemDetails from "../components/customerMenu/CustomerMenuItemDetails";

const CustomerMenuConfirmItem = ({ navigate }) => {

	return (
        <div className="item-details-screen-layout">
            <CustomerMenuHeader />
            <CustomerMenuItemDetails />
        </div>
	)
}

export default CustomerMenuConfirmItem
