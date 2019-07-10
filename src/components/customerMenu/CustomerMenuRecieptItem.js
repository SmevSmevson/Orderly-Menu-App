import React from 'react'

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

    const changeAmount = () => {
        console.log("TODO change amount")
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
            <input className="confirm-receipt-item-amount" type="text" value={item.amount} onChange={changeAmount}/>
            <button onClick={ addItem }>+</button>
            <span>{ item.price }</span>

            {/* TODO need a better way to do this part */}
            {/* order => selectedSet[index][{category,itemName}] */}
            {item.setItem?
                <div className="confirm-receipt-item-set-container">
                    {item.setContents.map(contents => {
                        return contents.map(item => {
                            return (
                                <div className="confirm-receipt-item-set" key={item.category}>
                                    <span>{item.setItem}</span>
                                    <button>change</button>
                                </div>
                            )
                        })
                    })}
                </div>
            :''}
        </div>
	)
}

export default CustomerMenuRecieptItem
