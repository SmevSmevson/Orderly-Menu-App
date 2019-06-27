import React from 'react'

const CustomerMenuSetup = ({ navigate }) => {
	const CustomerMenuSetupEvent = () => {
		navigate(`/customer-menu`)
    }
    
    const goBack = () => {
		navigate(`/menu-selection`)
	}

	return (
        <div className="setup-container">
            <label className="table-label" htmlFor="table-number">table number</label>
            <input className="table-input" type="text" name="table-number"/>
            <button onClick={goBack} className="btn-back">back</button>
            <button onClick={CustomerMenuSetupEvent} className="btn-done">done</button>
        </div>
	)
}

export default CustomerMenuSetup
