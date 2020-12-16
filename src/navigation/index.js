import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../containers/Home';
import Add from '../containers/Add'

const Stack = createStackNavigator ();

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
        <Stack.Screen name="Add" component={Add} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Stacks