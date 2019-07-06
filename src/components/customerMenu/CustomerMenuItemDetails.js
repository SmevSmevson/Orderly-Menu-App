import React, { useContext } from 'react'
import { navigate } from "@reach/router";
import { OrderContext } from "../../ContextProviders/OrderContext";

const CustomerMenuItemDetails = ({ item }) => {
    const { dispatch } = useContext(OrderContext)
    
    const CustomerMenuItemDetailsEvent = () => {
        dispatch({ type: 'ADD_ITEM', order: item })
        navigate('/customer-menu')
    }

	return (
        <div className="item-details-container">
            <div className="item-details item-details-alt-1">
                <img className="item-details-badge" src="#" alt="" />
                <img className="item-details-img" src="#" alt="" />
                <span className="item-details-name"><strong>{item.name}</strong></span>
                <span className="item-details-price">{item.price}</span>
                <div className="item-details-nutritional-info">
                    {item.nutrition.map(info => {
                        return (
                                <div key={info.category}>{info.category} : {info.amount}</div>
                                )
                            })
                    }
                </div>
                <span className="item-details-discription">{item.description}</span>
                <div className="item-details-allergies">
                    {item.allergies.map(allergy => {
                        return (
                            <div key={allergy}>
                                <img className="item-details-allergy-icon" src="#" alt="" title="allergy"/>
                                <div>{ allergy }</div>
                            </div>
                        )
                    })}
                </div>
                <button onClick={CustomerMenuItemDetailsEvent} className="item-details-add-btn">add to order</button>
            </div>
        </div>
	)
}

export default CustomerMenuItemDetails
