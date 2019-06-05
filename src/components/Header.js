import React from 'react'
import '../styles/scss/main.scss'

const Header = () => {

	let node = null

	// a test function to see how easy is is to change color with css vars
	function changeColor(event){
		node.style.setProperty("--header-title-color", event.target.value)
	}

	// a test function to see how easy is is to change font-size with css vars
	function changeSize(event){
		node.style.setProperty("--header-title-font-size", `${event.target.value/10}rem`)
	}

	return (
		<div>
			{/*--- test inputs start ---*/}
			<input type="color" onChange={changeColor}></input>  
			<div className="slidecontainer">
				<input type="range" min="1" max="100" value="50" className="slider" id="myRange" onChange={changeSize}></input>
			</div>
			{/*--- test inputs end   ---*/}

			{/* if there are ids used in a loop will that cause an error since ids should be uneique?*/}
			{/* if so lets change this to a class */}
			<header id="header" ref={(n) => {node = n}}>
				<h1 className="header-title">CSS var test 1</h1>
				<h2 className="header-title">CSS var test 2</h2>
			</header>
		</div>
	)
}

export default Header
