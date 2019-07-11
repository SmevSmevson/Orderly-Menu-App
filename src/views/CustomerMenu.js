import React from 'react'
import CustomerMenuHeader from "../components/customerMenu/CustomerMenuHeader";
import CustomerMenuTabs from "../components/customerMenu/CustomerMenuTabs";
import CustomerMenuItemList from "../components/customerMenu/CustomerMenuItemList";
import CustomerMenuPagination from "../components/customerMenu/CustomerMenuPagination";
import CustomerMenuReceipt from "../components/customerMenu/CustomerMenuReceipt";

import OrderContextProvider from "../ContextProviders/OrderContext";
import AllergyContextProvider from "../ContextProviders/AllergyContext";

const CustomerMenu = () => {

	return (
        <div className="menu-screen-layout layout-alt-1">
            <CustomerMenuHeader />
            <CustomerMenuTabs />
            <AllergyContextProvider>
                <CustomerMenuItemList />
            </AllergyContextProvider>
            <CustomerMenuPagination />
            <OrderContextProvider>
                <CustomerMenuReceipt />     
            </OrderContextProvider>
        </div>
	)
}

export default CustomerMenu
