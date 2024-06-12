import IEnterForm from "../shared/Interface/All-interface";

const dta:IEnterForm[]=[]

const initialState = {
    data: dta
  };
  
  const dataReducer = (state = initialState, action: { type: any; payload:any}) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return { ...state, data: action.payload };
      case 'ADD_ITEM':
        return { ...state, data: [...state.data, action.payload] };
      case 'UPDATE_ITEM':
        return {
          ...state,
          data: state.data.map(item =>
            item.id === action.payload.id ? action.payload : item
          )
        };
      case 'DELETE_ITEM':
        return {
          ...state,
          data: state.data.filter(item => item.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  