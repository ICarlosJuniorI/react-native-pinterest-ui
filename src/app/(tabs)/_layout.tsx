import { useRef } from "react";
import { Tabs } from "expo-router";
import { Foundation, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import { Avatar } from "@/components/Avatar";
import { Menu } from "@/components/Menu";

import { colors } from "@/styles/colors";
import { View } from "react-native";

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  return (
    <View className="flex-1">
      <Tabs screenOptions={{
        headerShown: false, // Show the header
        tabBarShowLabel: false, // Show the name of the tabs
        tabBarActiveTintColor: colors.white, // Color of the active tab
        tabBarInactiveTintColor: colors.gray[600], // Color of the inactive tab
        tabBarStyle: {
          backgroundColor: colors.black,
          borderColor: colors.black
        }
      }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Foundation name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="plus" size={size} color={color} />
            ),
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              handleBottomSheetOpen();
            }
          })}
        />

        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubble-ellipses" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <Avatar
                className={`w-[30px] h-[30px] rounded-full ${focused && 'border-2 border-white'}`}
                source={{ uri: "https://github.com/ICarlosJuniorI.png" }}
              />
            )
          }} />
      </Tabs>

      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose} />
    </View>
  )
}