import React, { useContext } from 'react'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'
import '../styles/scss/main.scss'

const Header = () => {
	const context = useContext(CSSVarsContext)

	return (
		<>
			{/* if there are ids used in a loop will that cause an error since ids should be uneique?*/}
			{/* if so lets change this to a class */}
			<header
				id="header"
				onClick={(e) => {
					context.getElementCSSVars(e)
					}
				}>
				<h1 className="header-title">CSS var test 1</h1>
				<h2 className="header-title">CSS var test 2</h2>
			</header>
		</>
	)
}

export default Header
