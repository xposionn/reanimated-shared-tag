import { View, Text } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

const Details = () => {
  return (
    <View style={{flex:1}}>
      <Animated.Text sharedTransitionTag="text" style={{fontSize:60}}>Text</Animated.Text>
      <Animated.Image
        style={{ width: 200, height: 200 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        sharedTransitionTag = 'image'
      />
    </View>
  )
}

export default Details