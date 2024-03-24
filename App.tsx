import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStackNavigation from "./app/navigation/Navigation";



const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
};

export default App;
