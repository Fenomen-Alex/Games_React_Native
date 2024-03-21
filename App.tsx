import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Trivia from "./src/screens/Trivia";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Trivia" component={Trivia} />
        {/* Add additional stack screens for each game later (optional) */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
