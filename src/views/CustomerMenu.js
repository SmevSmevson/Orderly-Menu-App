import React from 'react'
import CustomerMenuHeader from "../components/customerMenu/CustomerMenuHeader";
import CustomerMenuTabs from "../components/customerMenu/CustomerMenuTabs";
import CustomerMenuItemList from "../components/customerMenu/CustomerMenuItemList";
import CustomerMenuPagination from "../components/customerMenu/CustomerMenuPagination";
import CustomerMenuReceipt from "../components/customerMenu/CustomerMenuReceipt";

const CustomerMenu = ({ navigate }) => {

	return (
        <div className="menu-screen-layout layout-alt-1">
            <CustomerMenuHeader />
            <CustomerMenuTabs />
            <CustomerMenuItemList />
            <CustomerMenuPagination />
            <CustomerMenuReceipt />        
        </div>
	)
}

export default CustomerMenu
