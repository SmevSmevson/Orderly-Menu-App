export function changeCSSVar(event, value, node) {
	value.value = event.target.value
	node.style.setProperty(value.property, `${value.value}`)
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
export function getElementCSSVars(event) {
	console.log(event.currentTarget)
	let node = event.currentTarget
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
        console.log('cssVars: ', cssVars)
		return cssVars
	}
}