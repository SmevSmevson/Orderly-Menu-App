import React, { useContext } from 'react'
import CustomerMenuItem from "./CustomerMenuItem";

import { AllergyContext } from "../../ContextProviders/AllergyContext"

// TODO add real data with firebase this is mock data for development purposes only
import { items } from "../../MockData/items";

const CustomerMenuItemList = ({ navigate }) => {
    const { allergies } = useContext(AllergyContext)

    const filteredItems = items.filter(item => {
        let hasAllergy = false     
        item.allergies.forEach(allergy =>  {
            hasAllergy = hasAllergy===true ? true : allergies.findIndex(a => a.name === allergy)>=0
        })
        return !hasAllergy
    })
    
	return (
        <div className="menu-item-container">
            {
                filteredItems.map((item, index) => {
                    return <CustomerMenuItem key={item.id} item={item}/>
                })
            }
        </div>
	)
}

export default CustomerMenuItemList
