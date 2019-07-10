import React, { useContext } from 'react'
import { navigate } from "@reach/router";
import { OrderContext } from "../../ContextProviders/OrderContext";

const CustomerMenuItemDetails = ({ item }) => {
    const { dispatch } = useContext(OrderContext)
    let selectedSet = item.setItem ? item.setMenus.map((menu) => {
        return { category: menu.category, setItem: menu.items[0].name}
    }) : null
    let setContents = null
    
    const CustomerMenuItemDetailsEvent = () => {
        dispatch({ type: 'ADD_ITEM', order: item })
        dispatch({ type: 'ADD_SET_ITEMS', id: item.id, setContents: setContents })

        navigate('/customer-menu')
    }

    const setSetItem = (e) => {        
        setContents = selectedSet.map(set => {
            if(e.target.name === set.category) {
                set.setItem = e.target.id
            }
            return set
        })
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
                {!item.setItem?'':
                    item.setMenus.map((menu) => {
                        return (
                            <div key={menu.category}>
                                <div>{ menu.category }</div>
                                {
                                    menu.items.map(setItem => {
                                        return (
                                            <div key={setItem.name}>
                                                <img src={setItem.imageSrc} alt={setItem.name}/>
                                                <input type="radio" name={menu.category} id={setItem.name} onClick={setSetItem}/>
                                                <div>{ setItem.name }</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                <button onClick={CustomerMenuItemDetailsEvent} className="item-details-add-btn">add to order</button>
            </div>
        </div>
	)
}

export default CustomerMenuItemDetails
