import React from 'react'
import { navigate } from '@reach/router'

const CustomerMenuHeader = () => {
	const CustomerMenuHeaderEvent = () => {
		navigate(`customer-menu/allergies`)
	}

	return (
		<div className="menu-search-container">
			<button className="btn-staff">call staff</button>
			<input className="input-search" type="text" placeholder="search..." />
			<button onClick={CustomerMenuHeaderEvent} className="btn-allergies">
				allergies: 1
			</button>
		</div>
	)
}

export default CustomerMenuHeader
