export const orderReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM': {
			// action : {order}
			const matchingIdx = state.findIndex(
				(order) => order.id === action.order.id,
			) //check if item is already in the order

			if (matchingIdx !== -1) {
				// if item is already in the order add to the amount
				const mappedState = state.map((item, index) => {
					if (matchingIdx === index) {
						item.amount++
					}

					return item
				})
				return mappedState
			} else {
				// else add item to the order
				action.order.amount = 1
				action.order.setContents = []
				return [...state, action.order]
			}
		}

		case 'SUBTRACT_ITEM': {
			// action : {order}
			const mappedState = state.map((item) => {
				//map the array and when the index matches subtract from the amount
				if (action.order.id === item.id) {
					item.amount--
				}
				return item
			})

			return mappedState.filter((order) => order.amount !== 0) //filter out items that have an amount: 0
		}

		case 'REMOVE_ITEM': {
			return state.filter((order) => order.id !== action.order.id) //filter out items with matching id
		}

		case 'ADD_SET_ITEMS': {
			// action : {id, setContents}
			const matchingIndex = state.findIndex((order) => order.id === action.id)
			const mappedItemState = state.map((item, index) => {
				if (matchingIndex === index) {
					if (action.setContents) {
						item.setContents = item.setItem
							? [...item.setContents, action.setContents]
							: null // if a set item, set contents to new contents, else the same as the previous contents entered
					} else {
						item.setContents = item.setItem
							? [
									...item.setContents,
									item.setContents[item.setContents.length - 1],
							  ]
							: null
					}
				}
				return item
			})
			return mappedItemState
		}

		case 'SUBTRACT_SET_ITEMS': {
			// action : {id}
			const mappedState = state.map((item) => {
				//map the array and when the index matches subtract from the amount
				if (action.id === item.id) {
					item.setContents = item.setItem
						? item.setContents.filter(
								(set, index) => index !== item.setContents.length - 1,
						  )
						: null //if a set remove the last contents
				}
				return item
			})

			return mappedState //filter out items that have an amount: 0
		}

		case 'EDIT_SET_ITEMS': {
			//action: {id, setContentsIdx, setContents}}
			const mappedState = state.map((item) => {
				//map the array and when the index matches edit the value
				if (action.id === item.id) {
					item.setContents[action.setContentsIdx] = action.setContents //edit the contents of the setContentsIdx
				}
				return item
			})

			return mappedState
		}

		default:
			return state
	}
}
