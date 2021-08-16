import React from 'react'
import { View, ScrollView, StyleSheet} from 'react-native';
//import styles from '../utils/styles';

import { useSelector, useDispatch } from 'react-redux';

import Movie from '../comps/Movie';
import styles from '../utils/styles';



export default function Favs(props){

  const dispatch = useDispatch();
  const fav = useSelector(state => state.fav);
 

  const onFav = (m, faved) => {
      dispatch({thing: 'fav', type: 'delete', payload: m});
  }

    return (
        <ScrollView >

          <View>
            { fav.things.map(e => {
                return  <Movie key={e.imdbID} movie={e} faved={true} onFav={onFav} /> 
            })}
          </View>

          </ScrollView>
    );
}