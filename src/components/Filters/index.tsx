import { FlatList, StyleSheet } from "react-native";

import { FilterProps } from "./filters";

import { Filter } from "@/components/Filter";

export function Filters({ filters, filter, onChange }: FilterProps) {
  return (
    <FlatList
      className="pb-1"
      data={filters}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    gap: 24,
    paddingHorizontal: 8
  }
})