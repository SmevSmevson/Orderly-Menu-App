import React, { useContext } from 'react'
import CustomerMenuItem from "./CustomerMenuItem";

import { MenuContext } from "../../ContextProviders/MenuContext"
import { AllergyContext } from "../../ContextProviders/AllergyContext"

// TODO add real data with firebase this is mock data for development purposes only
import { items } from "../../MockData/items";

const CustomerMenuItemList = () => {
    const { menu } = useContext(MenuContext)
    const { allergies } = useContext(AllergyContext)

    //first filter items depending what menu (tab) we are in
    const filteredMenu = items.filter(item => {
        return menu.items.findIndex(id => id === item.id)>=0
    })

    //second filter menu depending what allergies we selected
    const filteredItems = filteredMenu.filter(item => {
        let hasAllergy = false     
        item.allergies.forEach(allergy =>  {
            hasAllergy = hasAllergy===true ? true : allergies.findIndex(a => a.name === allergy)>=0
        })
        return !hasAllergy
    })
    
	return (
        <div className="menu-item-list-container">
            {
                filteredItems.map((item, index) => {
                    return <CustomerMenuItem key={item.id} item={item}/>
                })
            }
        </div>
	)
}

export default CustomerMenuItemList
