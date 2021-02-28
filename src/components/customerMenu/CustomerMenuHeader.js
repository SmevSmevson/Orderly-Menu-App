import React, { useContext } from 'react'
import { navigate } from '@reach/router'
import { AllergyContext } from '../../ContextProviders/AllergyContext'

const CustomerMenuHeader = () => {
	const { allergies } = useContext(AllergyContext)

	const CustomerMenuHeaderEvent = () => {
		if (window.location.pathname === `/customer-menu/allergies`) {
			navigate(`/customer-menu`)
		} else {
			navigate(`/customer-menu/allergies`)
		}
	}
	return (
		<div className="menu-search-container">
			<button className="menu-search-btn-staff">call staff</button>
			<input
				className="menu-search-input-search"
				type="text"
				placeholder="search..."
			/>
			<button
				onClick={CustomerMenuHeaderEvent}
				className="menu-search-btn-allergies"
			>
				<span>allergies: {allergies.length}</span>
			</button>
		</div>
	)
}

export default CustomerMenuHeader
