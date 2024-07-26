import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';


const index = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default index;