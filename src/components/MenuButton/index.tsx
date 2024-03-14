import { Pressable, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { MenuButtonProps } from "@/components/MenuButton/menuButton";

import { colors } from "@/styles/colors";

export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome
        name={icon}
        size={32}
        color={colors.white}
        className="p-6 bg-zinc-700 rounded-[22px]"
      />
      <Text
        className="text-white font-medium text-sm mt-[10px]"
      >
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
})