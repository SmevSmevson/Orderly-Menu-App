import React, { useContext } from 'react'

import { AllergyContext } from "../../ContextProviders/AllergyContext"

const CustomerMenuAllergy = ({ allergy }) => {    
    const { allergies, dispatch } = useContext(AllergyContext)

    const toggleAllergy = (e) => {
        dispatch({ type: 'TOGGLE_ALLERGY', allergy: allergy })
    }

    const isSelectedAllergy = () => {
        return allergies.findIndex(contextAllergy => contextAllergy.id === allergy.id)
    }

	return (
        <div className={isSelectedAllergy()>=0?"allergy allergy-selected":"allergy"} onClick={toggleAllergy}>
            <img className="allergy-icon" src={allergy.imageSrc} alt="" />
            <span><strong>{allergy.name}</strong></span>
        </div>
	)
}

export default CustomerMenuAllergy
