import React from 'react';
import { Provider as PaperProvider} from 'react-native-paper';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import theme from './src/utils/theme';
import store from './src/store/store';
import Nav from './src/base/Nav';
import Alert from './src/base/Alert';

import { useFonts, Oswald_500Medium} from '@expo-google-fonts/oswald';
import Loading  from './src/base/Loading';

export default function App() {

  let [fontsLoaded] = useFonts({Oswald_500Medium});

  if (!fontsLoaded) {
    return  <Loading / >;  
  } 

  return (
    <Provider store={store}>
    <PaperProvider theme={theme}>

      <Nav />
      <Alert />

    </PaperProvider>
    </Provider>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/