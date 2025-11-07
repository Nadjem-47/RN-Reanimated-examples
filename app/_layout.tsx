import { GestureHandlerRootView } from "react-native-gesture-handler"
import SliderInterpolate from "./Slider-Interpolate"

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <SliderInterpolate />
    </GestureHandlerRootView>
  )
}


