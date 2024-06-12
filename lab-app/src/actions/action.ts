import IEnterForm from "../shared/Interface/All-interface";

export const fetchData = (data:IEnterForm[]) => ({
    type: 'FETCH_DATA',
    payload: data
  });
  
  export const addItem = (item:IEnterForm) => ({
    type: 'ADD_ITEM',
    payload: item
  });
  
  export const updateItem = (item:IEnterForm) => ({
    type: 'UPDATE_ITEM',
    payload: item
  });
  
  export const deleteItem = (id:number) => ({
    type: 'DELETE_ITEM',
    payload: id
  });
  