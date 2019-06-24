import React, { useContext } from 'react'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'
import '../styles/scss/main.scss'

const Customizer = () => {
    const context = useContext(CSSVarsContext)
	const customVars = context.customVars
	console.log(customVars)

	return (
		<div className="editor-section">
			{
                customVars.map((value, index) => {
				return (
					<div key={index}>
						<label htmlFor={value.property}>{value.property}:</label>
						<input
							id={value.property}
							type={value.value.includes('#') ? 'color' : 'text'}
							placeholder={value.value}
							onChange={(e) => context.changeCSSVar(e, value)}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default Customizer
