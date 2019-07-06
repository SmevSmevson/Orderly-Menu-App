export const orderReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const matchingIdx = state.findIndex(order => order.id === action.order.id)   //check if item is already in the order
            
            if(matchingIdx !== -1) {                                                    // if item is already in the order add to the amount
                const mappedState = state.map((item, index) => {
                    if(matchingIdx === index) {
                        item.amount++
                    }
                    return item
                })
                return mappedState
            } else {                                                                    // else add item to the order
                action.order.amount = 1
                return [...state, action.order ]
            }
        case 'SUBTRACT_ITEM':
            const mappedState = state.map((item) => {                                   //map the array and when the index matches subtract from the amount
                if(action.order.id === item.id) {
                    item.amount--
                }
                return item
            })

            return mappedState.filter(order => order.amount !== 0 )                     //filter out items that have an amount: 0

        case 'REMOVE_ITEM':
            return state.filter(order => order.id !== action.order.id )                 //filter out items with matching id
        default:
            return state
    }
}