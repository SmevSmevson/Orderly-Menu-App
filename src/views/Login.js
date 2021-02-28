import React, { useContext } from 'react'
import { CSSVarsContext } from '../ContextProviders/CSSVarsContext'

const Login = ({ navigate }) => {
	const context = useContext(CSSVarsContext)

	const loginEvent = () => {
		navigate(`/menu-selection`)
	}

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			id="login-container"
			className="login-container"
			onClick={(e) => {
				context.getElementCSSVars(e)
			}}
		>
			<div className="login-form">
				<label className="acc-label" htmlFor="account-name">
					account name
				</label>
				<input className="acc-input" type="text" name="account-name" />
				<label className="psw-label" htmlFor="account-password">
					account password
				</label>
				<input className="psw-input" type="text" name="account-password" />
				<button className="btn-login" onClick={loginEvent}>
					login
				</button>
			</div>
		</div>
	)
}

export default Login
