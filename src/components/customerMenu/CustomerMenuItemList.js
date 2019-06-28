import React from 'react'
import CustomerMenuItem from "./CustomerMenuItem";

// this is mock data for development purposes only
import { items } from "../../MockData/items";

const CustomerMenuItemList = ({ navigate }) => {
    
	return (
        <div className="menu-item-container">
            {
                items.map((item, index) => {
                    return <CustomerMenuItem key={item.id} item={item}/>
                })
            }
        </div>
	)
}

export default CustomerMenuItemList
