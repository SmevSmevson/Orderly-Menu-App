import React from 'react'
import CustomerMenuAllergy from './CustomerMenuAllergy'

import { allergies } from '../../MockData/allergies'

const CustomerMenuAllergyList = () => {
	return (
		<div className="allergy-list-container">
			{allergies.map((allergy) => {
				return <CustomerMenuAllergy allergy={allergy} key={allergy.id} />
			})}
		</div>
	)
}

export default CustomerMenuAllergyList
