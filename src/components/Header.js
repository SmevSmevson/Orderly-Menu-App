import React, { useState, useEffect } from 'react'
import '../styles/scss/main.scss'

const Header = () => {
	const [customVars, setCustomVars] = useState([])
	const [node, setNode] = useState(null)

	function changeCSSVar(event, value) {
		value.value = event.target.value
		//need to get node.style dynamically
		node.style.setProperty(value.property, `${value.value}`)
		getChangedCSSVars(event)
	}

	function getChangedCSSVars(e) {
		let styles = e.currentTarget.style
		console.log(styles)
		for (var i = styles.length; i--; ) {
			console.log(
				'property:',
				styles[i],
				', value:',
				styles.getPropertyValue(styles[i]),
			)
		}
	}

	function parseCSSVarsFromRules(matchedRules) {
		let cssVars = []
		matchedRules.forEach((csstext) => {
			let rules = csstext.substring(
				csstext.indexOf('{') + 1,
				csstext.indexOf('}'),
			)
			rules = rules.split(';')
			rules.forEach((rule) => {
				if (rule.trim().startsWith('--')) {
					let splitRule = rule.split(':')
					cssVars.push({
						property: splitRule[0].trim(),
						value: splitRule[1].trim(),
					})
				}
			})
		})
		return cssVars
	}

	// works in chrome and safari and firefox
	function getElementCSSVars(event) {
		console.log(event.currentTarget)
		setNode(event.currentTarget)
		console.log('currentNode', node)
		if (navigator.userAgent.indexOf('Chrome') !== -1) {
			let cssVars = []
			Object.keys(document.styleSheets).forEach((key) => {
				let styleSheet = document.styleSheets[key].cssRules
				let matchedNodeSelectorRules = Object.keys(styleSheet).reduce(
					(acc, key) => {
						let rule = styleSheet[key]
						if (
							(rule.selectorText
								? rule.selectorText.includes(`#${event.currentTarget.id}`)
								: false) ||
							rule.selectorText === ':root'
						) {
							acc.push(rule.cssText)
						}
						return acc
					},
					[],
				)
				cssVars = parseCSSVarsFromRules(matchedNodeSelectorRules)
			})
			console.log('cssVars: ', cssVars)
			return cssVars
		} else {
			let compStyles = getComputedStyle(event.currentTarget)

			let cssVars = Object.values(compStyles).reduce((acc, cur) => {
				if (cur.includes('--')) {
					acc.push({
						property: cur,
						value: compStyles.getPropertyValue(cur).trim(),
					})
				}
				return acc
			}, [])

			return cssVars
		}
	}

	useEffect(() => {
		// getChangedCSSVars()
		console.log('nodeID: ', node ? node.id : null, ', cssVars: ', customVars)
	})

	return (
		<div>
			{/*--- test dynamic inputs start ---*/}
			<div className="editor-section">
				{customVars.map((value, index) => {
					return (
						<div key={index}>
							<label htmlFor={value.property}>{value.property}:</label>
							<input
								id={value.property}
								type={value.value.includes('#') ? 'color' : 'text'}
								placeholder={value.value}
								onChange={(e) => changeCSSVar(e, value)}
							/>
						</div>
					)
				})}
			</div>
			{/*--- test dynamic inputs end   ---*/}

			{/* if there are ids used in a loop will that cause an error since ids should be uneique?*/}
			{/* if so lets change this to a class */}
			<header id="header" onClick={(e) => setCustomVars(getElementCSSVars(e))}>
				<h1 className="header-title">CSS var test 1</h1>
				<h2 className="header-title">CSS var test 2</h2>
			</header>

			<footer id="footer" onClick={(e) => setCustomVars(getElementCSSVars(e))}>
				<h1 className="footer-title">CSS var test 3</h1>
			</footer>
		</div>
	)
}

export default Header
