import { View } from "react-native";
import { useState } from "react";

import { Filters } from "@/components/Filters";
import { Posts } from "@/components/Posts";
import { FILTERS } from "@/utils/filters";
import { POSTS } from "@/utils/posts";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View className="flex-1 bg-black p-12 pt-[52px]">
      <Filters
        filters={FILTERS}
        filter={filter}
        onChange={setFilter}
      />
      <Posts posts={POSTS} />
    </View>
  )
}