import React from 'react';
import {Card, Title, Paragraph, Text, Button, IconButton } from 'react-native-paper';
import styles from '../utils/styles';

import { useSelector, useDispatch } from 'react-redux';

export default function Movie(props){

  const movie = props.movie;


    return (
        <Card style={styles.marginTop}>
        <Card.Title title={movie.Title} subtitle={movie.Year}  />
        <Card.Content>
          <Paragraph></Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: movie.Poster }} />
        <Card.Actions>
        <IconButton size={20}
          icon={props.faved ? 'heart' : 'heart-outline'}     
           onPress={() => props.onFav(movie, props.faved)}
        />
     
        </Card.Actions>
      </Card>
    );
};