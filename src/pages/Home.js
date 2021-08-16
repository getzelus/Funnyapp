import React from 'react';
import {Card, Title, Paragraph } from 'react-native-paper';
import {View} from 'react-native';
import styles from '../utils/styles';

export default function Home(props){

    return (
      <View style={styles.pres}>
        <Card style={styles.presCard}>
        <Card.Content>
          <Title>Welcome on Funny app !</Title>
          <Paragraph>In Movies, you can browse a list of film with their posters (you need to be online).</Paragraph>
          <Paragraph>Switch between without (only some titles available) or with OMDB Api key.</Paragraph>
          <Paragraph>Then, you can like your favourite movies and find them in the Fav section.</Paragraph>
          <Paragraph>Finally, play the Game and destroy the cubes with red color or your fav posters before they crush you !</Paragraph>
        </Card.Content>

      </Card>
      </View>
    );
};