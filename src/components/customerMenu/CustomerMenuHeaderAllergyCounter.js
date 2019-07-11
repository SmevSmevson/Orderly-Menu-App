import React, { useContext } from 'react'
import { AllergyContext }  from '../../ContextProviders/AllergyContext';



const CustomerMenuHeaderAllergyCounter = () => {
    const { allergies } = useContext(AllergyContext)
    return <span>allergies: {allergies.length}</span>
}

export default CustomerMenuHeaderAllergyCounter
