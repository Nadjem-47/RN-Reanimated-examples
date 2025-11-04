import { StyleSheet, View } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"

const size = 100
const circle_radius = size * 2

export default function Home() {
  const translateX = useSharedValue(0)
  const savedTranslateX = useSharedValue(0)

  const translateY = useSharedValue(0)
  const savedTranslateY = useSharedValue(0)

  const pan = Gesture.Pan()
    .onStart(() => {
      savedTranslateX.value = translateX.value
      savedTranslateY.value = translateY.value
    })
    .onUpdate((event) => {
      translateX.value = savedTranslateX.value + event.translationX
      translateY.value = savedTranslateY.value + event.translationY
    })
    .onEnd(() => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)

      if (distance < circle_radius) {
        translateX.value = withSpring(0)
        translateY.value = withSpring(0)
      }
    })

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value }, 
        { translateY: translateY.value },
      ],
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.square, rStyle]} />
        </GestureDetector>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  square: {
    width: size,
    height: size,
    backgroundColor: "red",
    borderRadius: 10,
  },

  circle: {
    width: circle_radius * 1.5,
    height: circle_radius * 1.5,
    borderRadius: circle_radius,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "black",
  },
})
