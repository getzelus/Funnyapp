import React from 'react'
import {Button, TextInput  } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Switch, Text} from 'react-native';
import styles from '../utils/styles';

import { useSelector, useDispatch } from 'react-redux';
import {movieRead} from '../store/movieSlice';

import Movie from '../comps/Movie';
import Loading from '../base/Loading';

// real local with pictures offline

export default function Movies(props){

  const dispatch = useDispatch();
  const movie = useSelector(state => state.movie);
  const fav = useSelector(state => state.fav);
  const base = useSelector(state => state.base);
 

  const [titleSearch, setTitleSearch] = React.useState('');
  const [online, setOnline] = React.useState(false);


  /*
  React.useEffect(() => {
    console.log('use effect movies');
    dispatch(() => movieRead(dispatch, '&s=batman&plot=full'));
   // req.get('&s=batman')
   // .then(data => console.log(data));
  }, []);
  */

  const onSearch = () => {
    if (titleSearch === '') return; 
    let newTitle = titleSearch.toLowerCase();
    dispatch(() => movieRead(dispatch, newTitle, online));
  }

  const onFav = (m, faved) => {
    if (faved){
      dispatch({thing: 'fav', type: 'delete', payload: m});
    }else {
      dispatch({thing: 'fav', type: 'create', payload: m});
    }
  }

  const onToggleSwitch = () => {
    setOnline(!online);
  }

  /*
  if (movie.things.length < 1){
    return (
      <View>
        <Text>Loading...</Text>
       </View>
    );
  }
  */
 if (base.loading){
   return (
    <Loading />
   );
 }
 //      <View style={[styles.marginTop, styles.marginLeft]}>

    return (
        <ScrollView>

          <View style={styles.marginTop}>
             <Switch value={online} onValueChange={onToggleSwitch} style={{marginRight: '85%'}} />
             <Text style={{marginLeft: 2}}>Without API key/With (without : batman, matrix, rocky, terminator) </Text>
          </View>

          <View style={styles.marginTop}>
           <TextInput
                 mode='outlined' label="Title" value={titleSearch}
                onChangeText={e => setTitleSearch(e)}
            />
            <Button mode="contained" onPress={() => onSearch()}>Search</Button>
          </View>

          <View>
            { movie.things.map(e => {
                let faved = false;
                if (fav.things.some(f => f.imdbID === e.imdbID)) faved = true;
                return  <Movie key={e.imdbID} movie={e} faved={faved} onFav={onFav} /> 
            })}
          </View>

         </ScrollView>
    );
}