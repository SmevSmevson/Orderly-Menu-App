import React from 'react'
import CustomerMenuHeader from "../components/customerMenu/CustomerMenuHeader";
import CustomerMenuAllergyList from "../components/customerMenu/CustomerMenuAllergyList";
import CustomerMenuAllergyButtons from "../components/customerMenu/CustomerMenuAllergyButtons";
import AllergyContextProvider from '../ContextProviders/AllergyContext';



const CustomerMenuAllergies = () => {
	return (
        <div className="allergy-screen-layout layout-alt-1">
            <AllergyContextProvider>
                <CustomerMenuHeader />
                <CustomerMenuAllergyList />
                <CustomerMenuAllergyButtons />
            </AllergyContextProvider>
        </div>
	)
}

export default CustomerMenuAllergies
