import React, { useState, createContext } from "react"

export const CSSVarsContext = createContext(["customVars", ()=>{}])

const CSSVarsContextProvider = (props) => {
    const customVars = useState([])
    const node = useState(null)

    return (
        <CSSVarsContext.Provider value={{customVars, node}}>
            {props.children}
        </CSSVarsContext.Provider>
    )
}

export default CSSVarsContextProvider