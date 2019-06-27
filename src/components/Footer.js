import React, { useContext } from 'react'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'
import '../styles/scss/main.scss'

const Footer = () => {
	const context = useContext(CSSVarsContext)

	return (
		<div>
			{/* if there are ids used in a loop will that cause an error since ids should be uneique?*/}
			{/* if so lets change this to a class */}
			<footer
				id="footer"
				onClick={(e) => {
					context.getElementCSSVars(e)
				}}
			>
				<h1 className="footer-title">CSS var test 3</h1>
			</footer>
		</div>
	)
}

export default Footer
