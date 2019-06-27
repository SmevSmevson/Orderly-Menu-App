import React from 'react'

const CustomerMenuReceipt = ({ navigate }) => {
	const CustomerMenuReceiptEvent = () => {
		navigate(`/confirm-order`)
    }
    
	return (
        <div className="menu-receipt-container">
            selected items
            {/* TODO add reciept item component */}
            <div className="menu-receipt-item">
                {/* possibly SLIDE to reveal */}
                <button className="menu-receipt-item-cancel">x</button>
                <span className="menu-receipt-item-name">item name</span>
                <button>-</button>
                <input className="menu-receipt-item-amount" type="text"/>
                <button>+</button>
                <span>¥10000</span>
            </div>
            <div className="menu-receipt-item">
                <button className="menu-receipt-item-cancel">x</button>
                <span  className="menu-receipt-item-name">set name</span>
                <button>-</button>
                <input className="menu-receipt-item-amount" type="text"/>
                <button>+</button>
                <span>¥10000</span>

                <div className="menu-receipt-item-set-container">
                    <div className="menu-receipt-item-set">
                        <span>set food</span>
                        <button>change</button>
                    </div>
                    <div className="menu-receipt-item-set">
                        <span>set drink</span>
                        <button>change</button>
                    </div>
                </div>
            </div>
            <div className="menu-receipt-total">
                <span className="menu-receipt-item-name">total</span>
                <span className="menu-receipt-item-total">¥ 20000</span>
            </div>
            <button onClick={CustomerMenuReceiptEvent} className="menu-receipt-order">order</button>
        </div>
	)
}

export default CustomerMenuReceipt
