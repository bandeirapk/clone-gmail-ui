import { Image, ScrollView, View } from "react-native"

import { DrawerContentComponentProps } from "@react-navigation/drawer"

import { DrawerButton } from "@/components/Drawer-button"

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          source={require("@/assets/logo.png")}
          className="w-28 ml-5"
          resizeMode="contain"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index
            const options = drawerProps.descriptors[route.key].options

            if (options.title === undefined) {
              return
            }

            return (
              <View
                className="w-full"
                key={route.key}
              >
                <DrawerButton />
              </View>
            )
          })}
        </View>
        <DrawerButton />
      </ScrollView>
    </View>
  )
}
