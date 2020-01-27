import { 
  ADD_DATA, 
  CLEAR_DATA,
  SET_LOADING,
  CLEAR_LOADING,
  CREATE_PART,
  DELETE_PART  
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
    case CLEAR_DATA:
      return{};
    case SET_LOADING:
      return {
        ...state,
        dataLoading: true
      };
    case CLEAR_LOADING:
      return {
        ...state,
        dataLoading: false
      };
    case CREATE_PART:
      return {
        ...state,
        database: [...state.database, payload.newPart],
        dataLoading: false
      };
    case DELETE_PART:
      return {
        ...state,
        database: state.database.filter(part => part._id !== payload)
      };
    default:
      return state;
  }
}
