import React from 'react'
import { Link } from '@reach/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Customizer from '../components/Customizer'

const Home = () => {
	return (
		<>
			<Customizer />
			<Header />
			<div>
				<Link to="/item/1">Go to item 1</Link>
				<Link to="/item/2">Go to item 2</Link>
			</div>
			<Footer />
		</>
	)
}

export default Home
