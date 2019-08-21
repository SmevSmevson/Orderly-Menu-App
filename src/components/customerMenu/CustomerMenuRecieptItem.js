import React from 'react'
import { navigate } from "@reach/router";

const CustomerMenuRecieptItem = ({item, dispatch, showImg}) => {

    const removeItem = () => {
        dispatch({ type: 'REMOVE_ITEM', order: item })
    }

    const addItem = () => {
        dispatch({ type: 'ADD_ITEM', order: item })
        dispatch({ type: 'ADD_SET_ITEMS', id: item.id })
    }

    const subtractItem = () => {
        dispatch({ type: 'SUBTRACT_SET_ITEMS', id: item.id })
        dispatch({ type: 'SUBTRACT_ITEM', order: item })
    }

    const editSetItem = (idx) => {
        navigate(`customer-menu/confirm-item/${item.id}`, { state: { item: item, editSet: idx }})
    }

	return (
        <div className="menu-receipt-item">
            <button onClick={ removeItem } className="menu-receipt-item-cancel">x</button>
            {showImg
                ?<img className="menu-receipt-item-img" src={item.imageSrc} alt="" />
                :''
            }
            <span className="menu-receipt-item-name">{ item.name }</span>
            <div className="menu-receipt-item-amount-container">
                <button className="menu-receipt-item-amount-subtract" onClick={ subtractItem }>-</button>
                <div className="menu-receipt-item-amount">{item.amount}</div>
                <button className="menu-receipt-item-amount-add" onClick={ addItem }>+</button>
            </div>
            <span>x</span>
            <span>{ item.price }</span>

            {item.setItem?
                <div className="menu-receipt-item-set-container">
                    {item.setContents.map((contents, index) => {
                        return (
                            <div className="menu-receipt-item-set" key={index}>
                                {
                                    contents.map(item => {
                                        return (
                                            <div className="menu-receipt-item-set-item" key={item.category + index}>
                                                <div className="menu-receipt-item-set-item-category">{item.category}:</div>
                                                <div className="menu-receipt-item-set-item-name">{item.setItem}</div>
                                            </div>
                                        )
                                    })
                                }
                                <button className="menu-receipt-item-set-change-btn" onClick={ () => editSetItem(index) }>change</button>
                            </div>
                        )
                    })}
                </div>
            :''}
            {/* TODO in the future we may have set items with added cost so subtotal is displayed here */}
            {item.amount > 1 ? 
                <div className="menu-receipt-item-subtotal">
                    <span className="menu-receipt-item-subtotal-title">subtotal:</span>
                    <span className="menu-receipt-item-subtotal-value">{ item.price * item.amount }</span>
                </div>
            :''}
        </div>
	)
}

export default CustomerMenuRecieptItem
