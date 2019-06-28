import React from 'react'
import { Link } from '@reach/router'

const Home = () => {
	return (
		<>
			{/* lets add links to each view for development purposes */}
			<div style={{display:"flex", flexDirection:"column"}}>
				<Link to="/item/1">Go to item 1</Link>
				<Link to="/item/2">Go to item 2</Link>
				<Link to="/login">Go to login</Link>
				<Link to="/menu-selection">Go to menu selection</Link>
				<Link to="/customer-menu-setup">Go to menu setup</Link>
				<Link to="/customer-menu">Go to customer menu</Link>
				<Link to="/customer-menu/confirm-item">Go to customer menu confirm item</Link>
				<Link to="/customer-menu/allergies">Go to customer menu allergies</Link>

			</div>
		</>
	)
}

export default Home
