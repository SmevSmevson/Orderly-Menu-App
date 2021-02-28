import React, { useContext } from 'react'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'

const CustomerMenuSetup = ({ navigate }) => {
	const context = useContext(CSSVarsContext)

	const CustomerMenuSetupEvent = () => {
		navigate(`/customer-menu`)
	}

	const goBack = () => {
		navigate(`/menu-selection`)
	}

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			id="setup-container"
			className="setup-container"
			onClick={(e) => {
				context.getElementCSSVars(e)
			}}
		>
			<div className="setup-form">
				<label className="table-label" htmlFor="table-number">
					table number
				</label>
				<input className="table-input" type="text" name="table-number" />
				<button onClick={goBack} className="btn-back">
					back
				</button>
				<button onClick={CustomerMenuSetupEvent} className="btn-done">
					done
				</button>
			</div>
		</div>
	)
}

export default CustomerMenuSetup
