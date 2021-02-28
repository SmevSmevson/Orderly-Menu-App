export const menuReducer = (state, action) => {
	switch (action.type) {
		case 'SET_MENU': {
			return action.menu
		}
		default:
			return state
	}
}
