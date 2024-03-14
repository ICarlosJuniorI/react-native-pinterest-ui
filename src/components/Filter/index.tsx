import { Pressable, PressableProps, Text } from "react-native";

import { FilterProps } from "./filter";

export function Filter({ filter, selected, ...rest }: PressableProps & FilterProps) {
  return (
    <Pressable
      className={`${selected && 'border-b-4 border-b-white'} pb-[6px]`}
      {...rest}
    >
      <Text
        className="text-white text-base font-medium"
      >
        {filter}
      </Text>
    </Pressable>
  )
}