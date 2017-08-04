export const reduIsLogin = (state = '', action) => {
	switch (action.type) {
		case 'EXIT':
			return {
				time: new Date()
			}
		default:
			return state;
	}
}