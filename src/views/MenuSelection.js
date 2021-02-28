import React, { useContext } from 'react'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'

const MenuSelection = ({ navigate }) => {
	const context = useContext(CSSVarsContext)

	const MenuSelectionEvent = () => {
		navigate(`/customer-menu-setup`)
	}

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			id="menu-selection-container"
			className="menu-selection-container"
			onClick={(e) => {
				context.getElementCSSVars(e)
			}}
		>
			<div className="menu-form">
				<button className="btn-customer" onClick={MenuSelectionEvent}>
					customer
				</button>
				<button className="btn-casher">casher</button>
				<button className="btn-waiter">waiter</button>
				<button className="btn-cook">cook</button>
			</div>
		</div>
	)
}

export default MenuSelection
