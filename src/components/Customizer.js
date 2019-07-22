import React, { useContext, useState } from 'react'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'

const Customizer = () => {
    const context = useContext(CSSVarsContext)
	const customVars = context.customVars
	const [showPanel, setShowPanel] = useState(false)

	const toggleShowPanel = () => {
		setShowPanel(!showPanel)
	}

	return (
		<div className={`editor-section ${showPanel ? "editor-section-show": "editor-section-hide"}`}>
			<button className="editor-section-toggle-button" onClick={toggleShowPanel}>
				{showPanel? 'X' : '<'}
			</button>
			<div className="editor-section-scroll-container">
				{customVars.map((value, index) => {
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
		</div>
	)
}

export default Customizer
