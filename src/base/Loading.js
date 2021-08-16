
import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator } from 'react-native-paper';
import styles from '../utils/styles';



export default function Loading(props) {

    return (
       <View style={styles.centered}>
 
         <ActivityIndicator animating={true}  />
      </View>
   );
}

