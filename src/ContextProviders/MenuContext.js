import React, { useReducer, createContext, useEffect } from 'react'
import { menuReducer } from "../reducers/menuReducer";

import { menus } from "../MockData/menus"

export const MenuContext = createContext()

const MenuContextProvider = (props) => {
    const [menu, dispatch] = useReducer(menuReducer, [], () => {
        const localData = localStorage.getItem('menu')
        return localData ? JSON.parse(localData) : menus[0]
    })

    useEffect(() => {
        localStorage.setItem('menu', JSON.stringify(menu))
    }, [menu])

    return (
        <MenuContext.Provider value={{menu, dispatch}}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider
