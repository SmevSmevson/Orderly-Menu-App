import React from 'react'
import {navigate} from '@reach/router'

const CustomerMenuItem = ({item}) => {  

    const CustomerMenuItemEvent = () => {
        if(item.setItem){
            navigate(`customer-menu/confirm-set-item`)
        } else {
            navigate(`customer-menu/confirm-item`)
        }
    }
    
	return (
        <div onClick={CustomerMenuItemEvent} className={item.higlight?"menu-item menu-item-highlight":"menu-item"}>
            <img className="menu-item-badge" src={item.badgeSrc} alt="" />
            <img className="menu-item-image" src={item.imageSrc} alt="" />
            <span><strong>{item.name}</strong></span>
            <span>{item.price}</span>
        </div>
	)
}

export default CustomerMenuItem
