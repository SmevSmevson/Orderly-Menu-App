import React from 'react'
import { Router } from '@reach/router'
import CSSVarsContextProvider from './ContextProviders/CSSVarsContext'
import Home from './views/Home'
import Item from './views/Item'

const App = () => {
	return (
		<CSSVarsContextProvider>
			<Router>
				<Home path="/" />
				<Item path="/item/:id" />
			</Router>
		</CSSVarsContextProvider>
	)
}

export default App
