import { 
  ADD_DATA, 
  REMOVE_DATA,
  SET_LOADING,
  CREATE_PART 
} from '../actions/types';

const initialState = {
  database: [],
  dataLoading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_DATA:
      return {
        ...state,
        database: payload.partsDetails
      };
    case SET_LOADING:
      return {
        ...state,
        dataLoading: true
      }
    case CREATE_PART:
      return {
        ...state,
        database: [...state.database, payload.newPart],
        dataLoading: false
      }
    case REMOVE_DATA:
    default:
      return state;
  }
}
