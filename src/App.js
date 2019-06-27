import React from 'react'
import { Router } from '@reach/router'
import CSSVarsContextProvider from './ContextProviders/CSSVarsContext'
import Customizer from './components/Customizer'

import Home from './views/Home'
import Item from './views/Item'
import Login from './views/Login'
import MenuSelection from './views/MenuSelection';
import CustomerMenu from './views/CustomerMenu';
import CustomerMenuSetup from './views/CustomerMenuSetup';

const App = () => {
	return (
		<CSSVarsContextProvider>
			<Customizer />
			<Router>
				<Home path="/" />
				<Item path="/item/:id" />
				<Login path="/login" />
				<MenuSelection path="/menu-selection" />
				<CustomerMenuSetup path="/customer-menu-setup"/>
				<CustomerMenu path="/customer-menu" />
			</Router>
		</CSSVarsContextProvider>
	)
}

export default App
