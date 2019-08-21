import React, { useContext } from 'react'
import { navigate } from '@reach/router'

import { AllergyContext } from "../../ContextProviders/AllergyContext"


const CustomerMenuAllergyButtons = () => {
    const { dispatch } = useContext(AllergyContext)

    const clearAllergies = () => {
        dispatch({ type: 'REMOVE_ALL_ALLERGIES'})
    }

    const backToMenu = () => {
        navigate(`/customer-menu`)
    }

	return (
        <div className="allergy-button-container">
            <button className="allergy-button-clear" onClick={clearAllergies}>clear all allergies</button>
            <button className="allergy-button-back" onClick={backToMenu}>back to menu</button>
        </div>
	)
}

export default CustomerMenuAllergyButtons
