import { FlatList, Text, View } from "react-native"

import { Input } from "@/components/Input"
import { MenuButton } from "@/components/Menu-button"
import { Avatar } from "@/components/Avatar"
import { Email } from "@/components/Email"
import { FloatButton } from "@/components/Float-button"

import { EMAILS } from "@/utils/email"

export default function Home() {
  return (
    <View className="flex-auto bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar source={{ uri: "https://github.com/bandeirapk.png " }} />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />

      <FloatButton icon="edit" />
    </View>
  )
}
