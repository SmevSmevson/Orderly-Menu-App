import React, { useContext } from 'react'
import { getElementCSSVars } from '../GetCSSHelper'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'
import '../styles/scss/main.scss'

const Footer = () => {
	const context = useContext(CSSVarsContext)
	const [customVars, setCustomVars] = context.customVars
	const [node, setNode] = context.node

	return (
		<div>
			{/* if there are ids used in a loop will that cause an error since ids should be uneique?*/}
			{/* if so lets change this to a class */}
			<footer
				id="footer"
				onClick={(e) => {
					setCustomVars(getElementCSSVars(e))
					setNode(e.currentTarget)
				}}
			>
				<h1 className="footer-title">CSS var test 3</h1>
			</footer>
		</div>
	)
}

export default Footer
