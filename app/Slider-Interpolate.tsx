import { Page } from "@/components/Page"
import { StyleSheet } from "react-native"
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"

const WORDS = [
  "Hello",
  "World",
  "React",
  "Native",
  "Reanimated",
  "Gesture",
  "Handler",
]

export default function SliderInterpolate() {
  const translateX = useSharedValue(0)


  const scrollHnadler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x
    }
  })

  return (
    <Animated.ScrollView pagingEnabled style={styles.container} horizontal onScroll={scrollHnadler} scrollEventThrottle={16}>
      {WORDS.map((word, index) => (
        <Page key={index} index={index} title={word} translateX={translateX}/>
      ))}
    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
})
