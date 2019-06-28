import React from 'react'

const CustomerMenuAllergy = ({ allergy }) => {    
	return (
        <div class="allergy">
            <img class="allergy-icon" src={allergy.imageSrc} alt="" />
            <span><strong>{allergy.name}</strong></span>
        </div>
	)
}

export default CustomerMenuAllergy
