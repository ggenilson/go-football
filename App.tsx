import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TeamProvider from './src/contexts/teamContext';
import { store } from './src/state';
import {StatusBar} from 'expo-status-bar'

import Home from './src/screens/home';
import About from './src/screens/team';
import Seasons from './src/screens/seasons';
import Standings from './src/screens/standings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <TeamProvider>
        <NavigationContainer>
          <StatusBar
            hidden={true}
          />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Home', headerShown: false }}
            />
            <Stack.Screen
              name="Seasons"
              component={Seasons}
              options={{ title: 'Seasons', headerShown: false }}
            />
            <Stack.Screen
              name="Team"
              component={About}
              options={{ title: 'Team', headerShown: false }}
            />
            <Stack.Screen
              name="Standings"
              component={Standings}
              options={{ title: 'Standings', headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TeamProvider>
    </Provider>
  );
}
