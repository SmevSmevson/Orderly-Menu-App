import React from 'react'
import { Link } from '@reach/router'

const Home = () => {
	return (
		<>
			{/* lets add links to each view for development purposes */}
			<div style="display:flex;flex-direction:column">
				<Link to="/item/1">Go to item 1</Link>
				<Link to="/item/2">Go to item 2</Link>
				<Link to="/login">Go to login</Link>
				<Link to="/menu-selection">Go to login</Link>
				<Link to="/customer-menu-setup">Go to login</Link>
				<Link to="/customer-menu">Go to login</Link>
			</div>
		</>
	)
}

export default Home
