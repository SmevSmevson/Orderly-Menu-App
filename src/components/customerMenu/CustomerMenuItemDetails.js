import React, { useContext } from 'react'
import { navigate } from "@reach/router";
import { OrderContext } from "../../ContextProviders/OrderContext";

import { items } from "../../MockData/items";

const CustomerMenuItemDetails = ({ item, editSet }) => {
    const { dispatch } = useContext(OrderContext)
    let selectedSet = item.setItem ? item.setMenus.map((menu) => {
        return { category: menu.category, setItem: menu.items[0].name}
    }) : null
    let setContents = selectedSet
    
    const addItem = () => {
        if(editSet >= 0){
            dispatch({ type: 'EDIT_SET_ITEMS', id: item.id, setContentsIdx: editSet, setContents: setContents})
        } else {
            dispatch({ type: 'ADD_ITEM', order: item })
            dispatch({ type: 'ADD_SET_ITEMS', id: item.id, setContents: setContents })
        }

        navigate('/customer-menu')
    }

    const cancelItem = () => {
        navigate('/customer-menu')
    }

    const setSetItem = (e) => {        
        setContents = selectedSet.map(set => {
            if(e.currentTarget.title === set.category) {
                set.setItem = e.currentTarget.id
            }
            return set
        })
    }

    //compares an array of ids to the list of all items and filters out any that arent equal
    const getItemsFromIds = (ids) => {
        const filteredItems = items.filter(mockItem => {
            return ids.findIndex(id => id === mockItem.id)>=0
        })
        return filteredItems
    }

	return (
        <div className="item-details-container">
            <div className="item-details item-details-alt-1">
                {item.badgeSrc?<img className="item-details-badge" src={item.badgeSrc} alt="" />:''}
                <div className="item-details-img-container">
                    <img className="item-details-img" src={item.imageSrc} alt="" />
                    <span className="item-details-name"><strong>{item.name}</strong></span>
                    <span className="item-details-price">{item.price}</span>
                </div>
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
                            <div className="item-details-allergy" key={allergy}>
                                <img className="item-details-allergy-icon" src="#" alt="" title="allergy"/>
                                <div className="item-details-allergy-name">{ allergy }</div>
                            </div>
                        )
                    })}
                </div>
                <div className="item-details-set-selection-container">
                    {!item.setItem?'':
                        item.setMenus.map((menu) => {
                            return (
                                <div className="item-details-set-selection-category-section" key={menu.category}>
                                    <div className="item-details-set-selection-category">{ menu.category }</div>
                                    <div className="item-details-set-item-list-container">
                                        {
                                            getItemsFromIds(menu.items).map(setItem => {
                                                return (
                                                    <>
                                                    <input className="item-details-set-item-radio" type="radio" name={menu.category} id={setItem.name}/>
                                                    <label className="item-details-set-item" key={setItem.name} htmlFor={setItem.name} id={setItem.name} title={menu.category} onClick={setSetItem}>
                                                        <img className="item-details-set-item-image" src={setItem.imageSrc} alt={setItem.name}/>
                                                        <div className="item-details-set-item-name">{ setItem.name }</div>
                                                    </label>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={cancelItem} className="item-details-cancel-btn">cancel</button>
                <button onClick={addItem} className="item-details-add-btn">add to order</button>
            </div>
        </div>
	)
}

export default CustomerMenuItemDetails
