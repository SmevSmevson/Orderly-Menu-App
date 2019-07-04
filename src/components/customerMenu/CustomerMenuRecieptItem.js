import React from 'react'

const CustomerMenuRecieptItem = ({item, showImg}) => {

    const removeItem = () => {
        console.log("TODO remove item")
    }

    const addItem = () => {
        console.log("TODO add item")
    }

    const subtractItem = () => {
        console.log("TODO subtract item")
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
            {item.setItem?
                <div className="confirm-receipt-item-set-container">
                    {item.setContents.map(contents => {
                        return (
                            <div key={item.id}>
                                <div className="confirm-receipt-item-set">
                                    <span>{contents.side}</span>
                                    <button>change</button>
                                </div>
                                <div className="confirm-receipt-item-set">
                                    <span>{contents.drink}</span>
                                    <button>change</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            :''}
        </div>
	)
}

export default CustomerMenuRecieptItem
