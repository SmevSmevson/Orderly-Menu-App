import React from 'react'
import { navigate } from '@reach/router'

const CustomerMenuItem = ({item}) => {  

    const CustomerMenuItemEvent = () => {
        navigate(`customer-menu/confirm-item/${item.id}`, { state: { item: item }})
    }
    
	return (
        <div onClick={CustomerMenuItemEvent} className={`menu-item  ${item.higlight?'menu-item-highlight':''}`}>
            {item.badgeSrc? <img className="menu-item-badge" src={item.badgeSrc} alt="" />:''}
            <img className="menu-item-image" src={item.imageSrc} alt="" />
            <span className="menu-item-name">{item.name}</span>
            <span className="menu-item-price">{item.price}</span>
        </div>
	)
}

export default CustomerMenuItem
