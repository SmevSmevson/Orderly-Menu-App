import React from 'react'
import { Router } from '@reach/router'
import './styles/scss/main.scss'
import CSSVarsContextProvider from './ContextProviders/CSSVarsContext'
// import Customizer from './components/Customizer'

import Home from './views/Home'
import Item from './views/Item'
import Login from './views/Login'
import MenuSelection from './views/MenuSelection';
import CustomerMenu from './views/CustomerMenu';
import CustomerMenuSetup from './views/CustomerMenuSetup';
import CustomerMenuConfirmItem from "./views/CustomerMenuConfirmItem";
import CustomerMenuAllergies from "./views/CustomerMenuAllergies";
import CustomerMenuConfirmOrder from "./views/CustomerMenuConfirmOrder";
import CustomerMenuOrderComplete from './views/CustomerMenuOrderComplete';


const App = () => {
	return (
		<CSSVarsContextProvider>
			{/* <Customizer /> */}
			<Router>
				<Home path="/" />
				<Item path="/item/:id" />
				<Login path="/login" />
				<MenuSelection path="/menu-selection" />
				<CustomerMenuSetup path="/customer-menu-setup" />
				<CustomerMenu path="customer-menu" />
				<CustomerMenuConfirmItem path="customer-menu/confirm-item/:id" />
				<CustomerMenuAllergies path="customer-menu/allergies" />
				<CustomerMenuConfirmOrder path="customer-menu/confirm-order" />
				<CustomerMenuOrderComplete path="customer-menu/order-complete" />
			</Router>
		</CSSVarsContextProvider>
	)
}

export default App
