import React from 'react'
import { navigate } from '@reach/router'
import AllergyContextProvider  from '../../ContextProviders/AllergyContext'
import CustomerMenuHeaderAllergyCounter from './CustomerMenuHeaderAllergyCounter'


const CustomerMenuHeader = () => {
	const CustomerMenuHeaderEvent = () => {
		if(window.location.pathname === `/customer-menu/allergies`) {
			navigate(`/customer-menu`)
		} else {
			navigate(`/customer-menu/allergies`)
		}
	}
	return (
		<div className="menu-search-container">
			<button className="btn-staff">call staff</button>
			<input className="input-search" type="text" placeholder="search..." />
			<button onClick={CustomerMenuHeaderEvent} className="btn-allergies">
				<AllergyContextProvider>
					<CustomerMenuHeaderAllergyCounter/>
				</AllergyContextProvider>
			</button>
		</div>
	)
}

export default CustomerMenuHeader
