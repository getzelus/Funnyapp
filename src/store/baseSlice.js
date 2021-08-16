//import req from '../utils/req';


const initialState = {
  alert: {
       open: false,
       message: '' 
  },
  loading: false

};

export const baseReducer = (state = initialState, action) => {
  
  let newState = {...state};

  if (action.thing !== 'base') return newState;

  switch (action.type){
      case 'openAlert':
            newState.alert.open = true;
            newState.alert.message = action.payload;
            break;
      case 'closeAlert':
            newState.alert.open = false;
            newState.alert.message = '';
            break;   
      case 'openLoading':
          newState.loading = true;
          break;   
      case 'closeLoading':
            newState.loading = false;
          break;  
        
      default: 
          break;
  }// switch
  return newState;  
}
