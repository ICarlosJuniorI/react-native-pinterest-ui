import { forwardRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

import { MenuProps } from "@/components/Menu/menu";
import { MenuButton } from "@/components/MenuButton";
import { colors } from "@/styles/colors";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    // Container
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      {/* Content */}
      <View className="flex-1 p-6 items-center">
        {/* Header */}
        <View className="flex-row">
          {/* Close */}
          <FontAwesome
            color={colors.white}
            name="close"
            size={24}
            onPress={onClose}
          />
          {/* Title */}
          <Text
            className="font-medium text-lg text-white flex-1 text-center mr-6"
          >
            Comece a criar agora
          </Text>
        </View>

        {/* Options */}
        <View
          className="flex-row gap-4 mt-8"
        >
          <MenuButton title="Pin" icon="home" />
          <MenuButton title="Colagem" icon="paste" />
          <MenuButton title="Pasta" icon="folder" />
        </View>
      </View>
    </BottomSheet>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[800]
  }
});