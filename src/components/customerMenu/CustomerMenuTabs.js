import React, { useContext } from 'react'
import { MenuContext } from '../../ContextProviders/MenuContext'

import { menus } from "../../MockData/menus"

const CustomerMenuTabs = () => {
    const { menu, dispatch } = useContext(MenuContext)

    const setMenu = (menu) => {
        dispatch({type: 'SET_MENU', menu: menu})
    }

    const isSelected = (id) => {
        return id === menu.id ? 'allergy-selected' : ''
    }

	return (
        <div className="menu-nav-container">
            {menus.map(menu => {
                return (
                    <div className={isSelected(menu.id)} onClick={() => setMenu(menu)}>{ menu.name }</div>
                )
            })}
        </div>
	)
}

export default CustomerMenuTabs
