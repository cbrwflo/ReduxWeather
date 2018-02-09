import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// State must not be manipulated, e.g. state.push([])
			// ensure a new Object representing State is returned
			// return state.concat([action.payload.data]);
			if (action.error) 
				return state;
			else
				return [ action.payload.data, ...state ]; //ES6 spread syntax. Equivalent to above
			
		default:
			return state;
	}
}