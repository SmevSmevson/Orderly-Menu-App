import React, { useContext } from 'react'
import { changeCSSVar } from '../GetCSSHelper'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'
import '../styles/scss/main.scss'

const Customizer = () => {
	const context = useContext(CSSVarsContext)
	const [customVars, setCustomVars] = context.customVars
	const [node, setNode] = context.node
	console.log(customVars, node)

	return (
		<div className="editor-section">
			{customVars.map((value, index) => {
				return (
					<div key={index}>
						<label htmlFor={value.property}>{value.property}:</label>
						<input
							id={value.property}
							type={value.value.includes('#') ? 'color' : 'text'}
							placeholder={value.value}
							onChange={(e) => changeCSSVar(e, value, node)}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default Customizer
