import { useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  runOnJS
} from "react-native-reanimated";
import { Skeleton } from "moti/skeleton";

import Logo from "@/assets/logo.png";

import { colors } from "@/styles/colors";
import { router } from "expo-router";

export default function Splash() {
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);
  const contentDisplay = useSharedValue(0);

  const dimensions = useWindowDimensions();

  const skeletonColors = [
    colors.gray[600],
    colors.gray[700],
    colors.gray[600],
  ];

  const logoAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }, { translateY: logoPositionY.value }]
  }));

  const contentAnimatedStyles = useAnimatedStyle(() => ({
    display: contentDisplay.value === 1 ? "flex" : "none",
  }));

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (finished) => {
        if (finished) {
          logoPositionY.value = withSequence(
            withTiming(50, undefined, () => (contentDisplay.value = 1)),
            withTiming(-dimensions.height, { duration: 400 }),
          )

          runOnJS(onEndSplash)();
        }
      }),
    );
  }

  function boxes(column: "right" | "left") {
    const rest = column === "left" ? 0 : 1;

    return Array.from({ length: 20 })
      .filter((_, index) => index % 2 === rest)
      .map((_, index) => {
        const height = index % 2 === (column === "left" ? 0 : 1) ? 200 : 300;

        return (
          <Animated.View key={index} style={[styles.box, { height }]}>
            <Skeleton colors={skeletonColors} width="100%" height={height} />
          </Animated.View>
        )
      });
  }

  function onEndSplash() {
    setTimeout(() => {
      router.push("/(tabs)")
    }, 2000);
  }

  function filters() {
    return Array.from({ length: 10 })
      .map((_, index) => (
        <Skeleton key={index} width={60} height={26} radius={6} colors={skeletonColors} />
      ));
  }

  useEffect(() => {
    logoAnimation()
  }, []);

  return (
    <View
      className="flex-1 bg-black items-center justify-center px-3"
    >
      <Animated.Image
        style={[styles.logo, logoAnimatedStyles]}
        source={Logo}
      />

      <Animated.View
        style={[styles.content, contentAnimatedStyles]}
        entering={SlideInDown.duration(700)}
      >
        <View className="w-full flex-row gap-3 pb-3">
          {filters()}
        </View>

        <View className="flex-1 w-full flex-row gap-3">
          <View className="flex-1 gap-3">{boxes("left")}</View>
          <View className="flex-1 gap-3">{boxes("right")}</View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 64,
  },
  box: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: colors.gray[600],
  },
  content: {
    flex: 1,
    width: "100%",
  }
})