import { GestureHandlerRootView } from "react-native-gesture-handler"
import Home from "./home"

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Home />
    </GestureHandlerRootView>
  )
}


