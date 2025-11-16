import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


const imageUri = "https://picsum.photos/900/900";

const {width, height} = Dimensions.get('window');
const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function PinchGestureHandlerExample() {


    const scale = useSharedValue(1);
    const focalX = useSharedValue(0);
    const focalY = useSharedValue(0);

    const tap = Gesture.Pinch().onChange((event) => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
    }).onEnd(() => {
        scale.value =  withTiming(1);
    }
    );


    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: focalX.value },
                { translateY: focalY.value },
                { translateX: -width / 2 },
                { translateY: -height / 2 },
                { scale: scale.value },
                { translateX: -focalX.value },
                { translateY: -focalY.value },
                { translateX: width / 2 },
                { translateY: height / 2 },
            ],
        };
    });


    const rFocalPointStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: focalX.value - 10 },
                { translateY: focalY.value - 10 },
            ],
        };
    })

        

    return (
        <GestureDetector gesture={tap}>
        <Animated.View style={{ flex: 1 }}>
          <AnimatedImage
            source={{ uri: imageUri }}
            style={[{ flex: 1, width: "100%", height: "80%"}, rStyle]}
          />
      
          <Animated.View style={[styles.focalPoint, rFocalPointStyle]} />
        </Animated.View>
      </GestureDetector>
    )
}


const styles = StyleSheet.create({
    focalPoint: {
        ...StyleSheet.absoluteFillObject,
        width: 20,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 10,
    }
})