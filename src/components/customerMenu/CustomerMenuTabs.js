import React, { useContext } from 'react'
import { MenuContext } from '../../ContextProviders/MenuContext'

import { menus } from '../../MockData/menus'

const CustomerMenuTabs = () => {
	const { menu, dispatch } = useContext(MenuContext)

	const setMenu = (menu) => {
		dispatch({ type: 'SET_MENU', menu: menu })
	}

	const isSelected = (id) => {
		return id === menu.id ? 'menu-nav-tab-selected' : ''
	}

	return (
		<div className="menu-nav-container">
			{menus.map((menu) => {
				return (
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
					<div
						key={menu.id}
						className={`menu-nav-tab ${isSelected(menu.id)}`}
						onClick={() => setMenu(menu)}
					>
						{menu.name}
					</div>
				)
			})}
		</div>
	)
}

export default CustomerMenuTabs
