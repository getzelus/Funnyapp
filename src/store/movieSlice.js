import req from '../utils/req';
//import store from './store';

import dataLocal from '../utils/dataLocal';

const initialState = {
  things: [],
  value: 0,
 
};

export const movieReducer = (state = initialState, action) => {
  
  let newState = {...state};

  if (action.thing !== 'movie') return newState;

  switch (action.type){
      case 'read':
            newState.things = action.payload; 
            break;
      case 'create':
            newState.things.push(action.payload);   
            break;
      case 'update':
            newState.things.map(e => e.id === action.payload.id ? action.payload : e);
          break;
      case 'delete':
            newState.things = newState.things.filter(e => e.id !== action.payload.id); 
            break;
        
      default: 
          break;
  }// switch
  return newState;  
}

export const movieRead = async (dispatch, url, online) =>{
    //let other = store.getState().book.value;
  // dispatch to other reducer 
  
  let data;

  if (online){
  dispatch({thing: 'base', type: 'openLoading'});
  
  let res = await req.get('&s=' + url);
  dispatch({thing: 'base', type: 'closeLoading'});
  //console.log(res);
  if (res.Response === 'False') {
    dispatch({ thing: 'base', type: 'openAlert', payload: 'Invalid search : too many results'});
    return;
  }
  data = await res.Search;
  dispatch({thing: 'movie', type: 'read', payload: data});
  
}else{
    data = dataLocal[url];
    if (!data){
      dispatch({ thing: 'base', type: 'openAlert', payload: 'Invalid search : title not in base'});
      return;
    } 
    dispatch({thing: 'movie', type: 'read', payload: data});
  } 

}
