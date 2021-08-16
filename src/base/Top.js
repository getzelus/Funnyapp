import React from 'react';
import { Appbar, Menu } from 'react-native-paper';

import styles from '../utils/styles';


export default function Top({ navigation, previous }) {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);


    const onPressMenu = (arg) => {
      navigation.navigate(arg);
      closeMenu();
    }
  
    return (
 
      <Appbar.Header >
        {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="Funny app" titleStyle={{fontFamily: 'Oswald_500Medium'}} />
        
        {!previous ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={openMenu} />
            }>
            <Menu.Item onPress={() => onPressMenu('Home')} title="Home" />
            <Menu.Item onPress={() => onPressMenu('Movies')} title="Movies" />
            <Menu.Item onPress={() => onPressMenu('Favs')} title="Favs" />
            <Menu.Item onPress={() => onPressMenu('Game')} title="Game" />
         
          </Menu>
        ) : null}
      </Appbar.Header>

    );
  }