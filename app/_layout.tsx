import { GestureHandlerRootView } from "react-native-gesture-handler"
import ThemeAnimation from "./theme-animation"

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <ThemeAnimation />
    </GestureHandlerRootView>
  )
}


