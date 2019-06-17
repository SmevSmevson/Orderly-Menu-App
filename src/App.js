import React from 'react'
import CSSVarsContextProvider from './ContextProviders/CSSVarsContext'
import Customizer from './components/Customizer'
import Header from './components/Header'

const App = () => {
	return (
		<CSSVarsContextProvider>
			<Customizer />
			<Header />
		</CSSVarsContextProvider>
	)
}

export default App
