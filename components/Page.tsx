import { Dimensions, StyleSheet, Text, View } from "react-native"
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated"

interface PageProps {
  title: string
  index: number
  translateX: Animated.SharedValue<number>
}

const { height, width } = Dimensions.get("window")

const SIZE = 200;
export const Page = ({ index, title , translateX}: PageProps) => {

  const inputRange = [(index - 1) * width, index * width,(index + 1) * width]

const rStyle = useAnimatedStyle(() => {

  const scale = interpolate(translateX.value, inputRange, [0 , 1, 0], Extrapolation.CLAMP)
  const borderRadius = interpolate(translateX.value, inputRange, [0 , SIZE/2, 0], Extrapolation.CLAMP)

  return {
    transform: [{ scale }],
    borderRadius,
  }
})


const rTextStyle = useAnimatedStyle(() => {

  const translateY = interpolate(translateX.value, inputRange, [height / 2 , 0, -height / 2], Extrapolation.CLAMP)
  const opacity = interpolate(translateX.value, inputRange, [-2 , 1, -2], Extrapolation.CLAMP)

  return {
    transform: [{ translateY }],
    opacity,
  }
})
  
  return (
    <View style={[styles.container, { backgroundColor:`rgb(0, 0, 265, 0.${index + 2})` }]}>

      <Animated.View style={[styles.square, { backgroundColor:`green` }, rStyle]}></Animated.View>
      <Animated.View style={[{position:"absolute"},rTextStyle]}><Text style={[styles.text]}>{title}</Text></Animated.View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
  },
  text: {
    fontSize: 42,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
})
