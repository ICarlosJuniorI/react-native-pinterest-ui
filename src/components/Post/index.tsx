import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { PostProps } from "@/components/Post/post";

import { colors } from "@/styles/colors";

type Props = {
  post: PostProps
}

export function Post({ post }: Props) {
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, []);

  return (
    <View
      className="flex-1 p-[5px]"
    >
      <Image
        style={[styles.image, { aspectRatio }]}
        source={{ uri: post.image }}
      />

      <View
        className="flex-row justify-between items-center mt-[7px]"
      >
        <Text
          className="text-sm text-white font-bold"
        >
          {post.title}
        </Text>

        <Feather
          name="more-horizontal"
          size={16}
          color={colors.white}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 22
  }
});