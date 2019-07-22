export const allergyReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ALLERGY':{
            //search state for matching id
            const allergyIdx = state.findIndex(allergy => allergy.id === action.allergy.id)
            //if match found remove allergy from array
            if(allergyIdx !== -1) {
                state = state.filter(allergy => allergy.id !== action.allergy.id ) 
            } else {
                state = [...state, action.allergy]
            }

            return state
        }
        case 'REMOVE_ALL_ALLERGIES': {
            return []
        }
        default : 
            return state
    }
}
