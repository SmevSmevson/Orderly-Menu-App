import React from 'react'

const CustomerMenuAllergy = ({ allergy }) => {    
	return (
        <div className="allergy">
            <img className="allergy-icon" src={allergy.imageSrc} alt="" />
            <span><strong>{allergy.name}</strong></span>
        </div>
	)
}

export default CustomerMenuAllergy
