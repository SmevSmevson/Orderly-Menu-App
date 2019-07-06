export const orderReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const result = state.findIndex(order => order.id === action.order.id)   //check if item is already in the order
            
            if(result !== -1) {                                                    // if item is already in the order only change the amount of the item
                const mappedState = state.map((item, index) => {
                    if(result === index) {
                        item.amount++
                    }
                    return item
                })
                return mappedState
            } else {                                                               // else add item to the order
                action.order.amount = 1
                return [...state, action.order ]
            }
        case 'REMOVE_ITEM':
            console.log('TODO remove item')
            return state.filter(order => order.id !== action.order.id )
        case 'EDIT_ITEM':
            console.log('TODO edit item')
            return state
        default:
            return state
    }
}