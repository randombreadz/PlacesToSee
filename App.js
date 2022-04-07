import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import Delhi from './screens/Delhi';
import Hungary from './screens/Hungary';
import NewYork from './screens/NewYork';
import Paris from './screens/Paris';
import Login from './screens/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Delhi" component={Delhi} />
        <Stack.Screen name="Hungary" component={Hungary} />
        <Stack.Screen name="NewYork" component={NewYork} />
        <Stack.Screen name="Paris" component={Paris} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
