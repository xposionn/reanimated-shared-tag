import { View, Text } from "react-native";
import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Details from "../screens/Details";
import Home from "../screens/Home";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type HomePageProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type DetailsPageProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
