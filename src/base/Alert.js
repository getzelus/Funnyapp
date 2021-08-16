
import React from 'react';

import { Snackbar } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';


export default function Alert(props) {

   const dispatch = useDispatch();
   const base = useSelector(state => state.base);

   const onDismissSnackBar = () => {
      dispatch({ thing: 'base', type: 'closeAlert'});
   } 
   
    return (
 
         <Snackbar
            visible={base.alert.open}
            onDismiss={onDismissSnackBar}
            action={{
               label: 'Undo',
               onPress: () => {
               
               },
            }}>
            {base.alert.message}
         </Snackbar>

   );
}

