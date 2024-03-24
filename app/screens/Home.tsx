import { View, Text, Image, Button } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { HomePageProps } from "../navigation/Navigation";

const Home = ({ navigation }: HomePageProps) => {
  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.Text sharedTransitionTag="text">Text</Animated.Text>
      <Animated.Image
        style={{ width: 66, height: 58 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        sharedTransitionTag = 'image'
      />
      <Button title="click me" onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

export default Home;
