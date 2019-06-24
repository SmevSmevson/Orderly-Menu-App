import React, { useContext } from 'react'
import { getElementCSSVars } from '../GetCSSHelper'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'
import '../styles/scss/main.scss'

const Header = () => {
	const context = useContext(CSSVarsContext)
	const [customVars, setCustomVars] = context.customVars
	const [node, setNode] = context.node

	return (
		<div>
			{/* if there are ids used in a loop will that cause an error since ids should be uneique?*/}
			{/* if so lets change this to a class */}
			<header
				id="header"
				onClick={(e) => {
					setCustomVars(getElementCSSVars(e))
					setNode(e.currentTarget)
				}}
			>
				<h1 className="header-title">CSS var test 1</h1>
				<h2 className="header-title">CSS var test 2</h2>
			</header>

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

export default Header
