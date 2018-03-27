import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; //the O/P will be like this[city, city, city]
  }

  return state;
}
