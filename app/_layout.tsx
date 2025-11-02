import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { SharedValue, useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';

const size = 100;



const handleRotation = (progress: SharedValue<number>) => {
  "worklet"
  return `${progress.value * 2 * Math.PI}rad`
}

export default function RootLayout() {

  const progress = useSharedValue(1);
  const scale = useSharedValue(1)

   
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, {duration: 1000}), -1, true);
    scale.value = withRepeat(withSpring(3), -1, true)

  }, [])
  

console.log(reanimatedStyle);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View style={[{width: size, height: size, backgroundColor: 'red'}, reanimatedStyle]} />
    </View>
  );
}
 