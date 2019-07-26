import { 
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED 
	} from './constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => (dispach) => {
	dispach({ type: REQUEST_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispach({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
	.catch(error => dispach({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}