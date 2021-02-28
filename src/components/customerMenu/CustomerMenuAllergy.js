import React, { useContext } from 'react'

import { AllergyContext } from '../../ContextProviders/AllergyContext'

const CustomerMenuAllergy = ({ allergy }) => {
	const { allergies, dispatch } = useContext(AllergyContext)

	const toggleAllergy = () => {
		dispatch({ type: 'TOGGLE_ALLERGY', allergy: allergy })
	}

	const isSelectedAllergy = () => {
		return allergies.findIndex(
			(contextAllergy) => contextAllergy.id === allergy.id,
		)
	}

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			className={
				isSelectedAllergy() >= 0 ? 'allergy allergy-selected' : 'allergy'
			}
			onClick={toggleAllergy}
		>
			<img className="allergy-icon" src={allergy.imageSrc} alt="" />
			<div className="allergy-name">{allergy.name}</div>
		</div>
	)
}

export default CustomerMenuAllergy
