import React from 'react'
import CustomerMenuAllergy from './CustomerMenuAllergy'

import { allergies } from '../../MockData/allergies'

const CustomerMenuAllergyList = () => {
	return (
		<div className="allergy-container">
			{allergies.map((allergy) => {
				return <CustomerMenuAllergy allergy={allergy} />
			})}
		</div>
	)
}

export default CustomerMenuAllergyList
