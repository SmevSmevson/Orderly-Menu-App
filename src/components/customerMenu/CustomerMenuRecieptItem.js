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
        <div className="confirm-receipt-item">
            <button onClick={ removeItem } className="confirm-receipt-item-cancel">x</button>
            {showImg
                ?<img className="confirm-receipt-item-img" src={item.imageSrc} alt="" />
                :''
            }
            <span className="confirm-receipt-item-name">{ item.name }</span>
            <button onClick={ subtractItem }>-</button>
            <input className="confirm-receipt-item-amount" type="text" value={item.amount}/>
            <button onClick={ addItem }>+</button>
            <span>{ item.price }</span>

            {/* TODO need a better way to do this part */}
            {/* order => selectedSet[index][{category,itemName}] */}
            {item.setItem?
                <div className="confirm-receipt-item-set-container">
                    {item.setContents.map((contents, index) => {
                        return (
                            <div className="confirm-receipt-item-set" key={index}>
                                {
                                    contents.map(item => {
                                        return (
                                            <div className="confirm-receipt-item-set-item" key={item.category}>
                                                <div className="confirm-receipt-item-set-item-category">{item.category}:</div>
                                                <div className="confirm-receipt-item-set-item-name">{item.setItem}</div>
                                            </div>
                                        )
                                    })
                                }
                                <button onClick={ () => editSetItem(index) }>change</button>
                            </div>
                        )
                    })}
                </div>
            :''}
        </div>
	)
}

export default CustomerMenuRecieptItem
