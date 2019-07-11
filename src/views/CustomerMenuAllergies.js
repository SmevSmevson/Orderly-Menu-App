import React from 'react'
import CustomerMenuHeader from "../components/customerMenu/CustomerMenuHeader";
import CustomerMenuAllergyList from "../components/customerMenu/CustomerMenuAllergyList";
import AllergyContextProvider from '../ContextProviders/AllergyContext';



const CustomerMenuAllergies = () => {
	return (
        <div className="allergy-screen-layout layout-alt-1">
            <AllergyContextProvider>
                <CustomerMenuHeader />
                <CustomerMenuAllergyList />
            </AllergyContextProvider>
        </div>
	)
}

export default CustomerMenuAllergies
