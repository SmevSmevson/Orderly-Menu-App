import React, { useReducer, createContext, useEffect } from 'react'
import { allergyReducer } from "../reducers/allergyReducer";

export const AllergyContext = createContext()

const AllergyContextProvider = (props) => {
    const [allergies, dispatch] = useReducer(allergyReducer, [], () => {
        const localData = localStorage.getItem('allergies')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('allergies', JSON.stringify(allergies))
    }, [allergies])

    return (
        <AllergyContext.Provider value={{allergies, dispatch}}>
            {props.children}
        </AllergyContext.Provider>
    )
}

export default AllergyContextProvider
