import React from 'react'

const CustomerMenuItems = ({ navigate }) => {
	const CustomerMenuItemsEvent = () => {
		navigate(`/confirm-item`)
    }

    const CustomerMenuSetItemsEvent = () => {
		navigate(`/confirm-set-info`)
    }
    
	return (
        <div className="menu-item-container">
            {/* TODO add menu item component*/}
            <div className="menu-item">
                <img className="menu-item-image" src="#" alt="" />
                <span><strong>item name</strong></span>
                <span>item price</span>
            </div>
            <div onClick={CustomerMenuItemsEvent} className="menu-item menu-item-highlight">
                <img className="menu-item-badge" src="#" alt="" />
                <img className="menu-item-image" src="#" alt="" />
                <span><strong>highlighted item name</strong></span>
                <span>highlighted item price</span>
            </div>
            <div className="menu-item">item 3</div>
            <div className="menu-item">item 4</div>
            <div className="menu-item">item 5</div>
            <div onClick={CustomerMenuSetItemsEvent} className="menu-item">set item</div>
            <div className="menu-item">item 7</div>
            <div className="menu-item">item 8</div>
            <div className="menu-item">item 9</div>
        </div>
	)
}

export default CustomerMenuItems
