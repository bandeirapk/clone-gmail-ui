import { View } from "react-native"

import { Input } from "@/components/Input"
import { MenuButton } from "@/components/Menu-button"
import { Avatar } from "@/components/Avatar"

export default function Home() {
  return (
    <View className="flex-auto bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar source={{ uri: "https://github.com/bandeirapk.png " }} />
      </Input>
    </View>
  )
}
