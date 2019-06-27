import React from 'react'

const MenuSelection = ({ navigate }) => {
	const MenuSelectionEvent = () => {
		navigate(`/customer-menu-setup`)
	}

	return (
        <div className="menu-container">
            <button className="btn-customer" onClick={MenuSelectionEvent}>customer</button>
            <button className="btn-casher">casher</button>
            <button className="btn-waiter">waiter</button>
            <button className="btn-cook">cook</button>
        </div>
	)
}

export default MenuSelection
