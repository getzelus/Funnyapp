//import req from '../utils/req';


const initialState = {
  things: [],
  value: 0
 
};

export const favReducer = (state = initialState, action) => {
  
  let newState = {...state};

  if (action.thing !== 'fav') return newState;

  switch (action.type){
      case 'read':
            newState.things = action.payload; 
            break;
      case 'create':
            newState.things.push(action.payload);   
            break;
      case 'update':
            newState.things.map(e => e.imdbID === action.payload.imdbID ? action.payload : e);
          break;
      case 'delete':
            newState.things = newState.things.filter(e => e.imdbID !== action.payload.imdbID); 
            break;
        
      default: 
          break;
  }// switch
  return newState;  
}
