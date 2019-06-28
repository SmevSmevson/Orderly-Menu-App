import React from 'react'
import { navigate } from "@reach/router";

const CustomerMenuItemDetails = () => {

    const CustomerMenuItemDetailsEvent = () => {
        // TODO add item to order
        navigate('/customer-menu')
    }

	return (
        <div className="item-details-container">
            <div className="item-details item-details-alt-1">
                <img className="item-details-badge" src="#" alt="" />
                <img className="item-details-img" src="#" alt="" />
                <span className="item-details-name"><strong>item-details name</strong></span>
                <span className="item-details-price">item-details price</span>
                <span className="item-details-nutritional-info">nutritional info</span>
                <span className="item-details-discription">item-details description : <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ad eveniet molestiae debitis molestias repellendus accusamus amet deleniti cupiditate, repudiandae, architecto sapiente illo. Non sunt aliquam sequi commodi quod eum!</span>
                <div className="item-details-allergies">
                    {/* TODO add allergies in loop. Keep code dry */}
                    allergies
                    <img className="item-details-allergy-icon" src="#" alt="" title="allergy" />
                    <img className="item-details-allergy-icon" src="#" alt="" title="allergy" />
                    <img className="item-details-allergy-icon" src="#" alt="" title="allergy" />
                    <img className="item-details-allergy-icon" src="#" alt="" title="allergy" />
                </div>
                <button onClick={CustomerMenuItemDetailsEvent} className="item-details-add-btn">add to order</button>
            </div>
        </div>
	)
}

export default CustomerMenuItemDetails
