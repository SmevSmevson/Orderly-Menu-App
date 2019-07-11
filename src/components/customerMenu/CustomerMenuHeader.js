import React, { useContext } from 'react'
import { navigate } from '@reach/router'
import { AllergyContext }  from '../../ContextProviders/AllergyContext';


const CustomerMenuHeader = () => {
	const { allergies } = useContext(AllergyContext)

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
					allergies: {allergies.length}
			</button>
		</div>
	)
}

export default CustomerMenuHeader
