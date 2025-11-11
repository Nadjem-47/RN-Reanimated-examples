import React, { useState } from "react";
import { Switch } from "react-native";
import Animated, { interpolateColor, useDerivedValue, withTiming } from "react-native-reanimated";

const SWITCH_TRACK_COLOR = {
  true: "red",
  false: "blue",
}

export default function ThemeAnimation() {

  const [theme, settheme] = useState("light");

  const progress  = useDerivedValue(() => {
    return withTiming(theme === "dark" ? 1 : 0);
  })

  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(progress.value, [0, 1], ["white", "black"]);
  })


    return (
        <Animated.View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,backgroundColor}}>
            <Switch trackColor={SWITCH_TRACK_COLOR} value={theme === "dark"} onValueChange={() => settheme(theme === "dark" ? "light" : "dark")} />
        </Animated.View>
    )
}
