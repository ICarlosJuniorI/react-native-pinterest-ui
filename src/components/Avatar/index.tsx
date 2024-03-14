import { Image, ImageProps } from "react-native";

export function Avatar({ ...rest }: ImageProps) {
  return (
    <Image {...rest} />
  )
}