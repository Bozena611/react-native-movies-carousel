import React from "react";
import { Text, View, Flatlist } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./screens/HomePage";
import MovieDetails from "./screens/MovieDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#121212', flex: 1 }
        }}
        initialRouteName="HomePage"
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

