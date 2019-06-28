import React from 'react'
import CustomerMenuHeader from "../components/customerMenu/CustomerMenuHeader";
import CustomerMenuAllergyList from "../components/customerMenu/CustomerMenuAllergyList";

const CustomerMenuAllergies = ({ navigate }) => {

	return (
        <div className="allergy-screen-layout layout-alt-1">
            <CustomerMenuHeader />
            <CustomerMenuAllergyList />
        </div>
	)
}

export default CustomerMenuAllergies
