import React from 'react'

const Login = ({ navigate }) => {
	const loginEvent = () => {
		navigate(`/menu-selection`)
	}

	return (
		<div id="login-container">
			<div className="login-form">
				<label className="acc-label" htmlFor="account-name">
					account name
				</label>
				<input className="acc-input" type="text" name="account-name" />
				<label className="psw-label" htmlFor="account-password">
					account password
				</label>
				<input className="psw-input" type="text" name="account-password" />
				<button className="btn-login" onClick={loginEvent}>login</button>
			</div>
		</div>
	)
}

export default Login
