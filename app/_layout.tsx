import { GestureHandlerRootView } from "react-native-gesture-handler"
import PinchGestureHandlerExample from "./PinchGestureHandlerExample"

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <PinchGestureHandlerExample />
    </GestureHandlerRootView>
  )
}


