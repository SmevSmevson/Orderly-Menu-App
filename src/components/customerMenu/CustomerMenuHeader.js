import React from 'react'

const CustomerMenuHeader = ({ navigate }) => {
	const CustomerMenuHeaderEvent = () => {
		navigate(`/allergies`)
    }
    
	return (
        <div className="menu-search-container">
            <button className="btn-staff">call staff</button>
            <input className="input-search" type="text" placeholder="search..."/>
            <button onClick={CustomerMenuHeaderEvent} className="btn-allergies">allergies: 1</button>
        </div>
	)
}

export default CustomerMenuHeader
