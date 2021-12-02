import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppScreen from './src/AppScreen';
import GlossaryDescScreen from './src/GlossaryDescScreen';
import GlossaryScreen from './src/GlossaryScreen';

const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="AppScreen" component={AppScreen} />
        <MainStack.Screen name="GlossaryScreen" component={GlossaryScreen} />
        <MainStack.Screen name="GlossaryDescScreen" component={GlossaryDescScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
