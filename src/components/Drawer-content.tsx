import { Image, ScrollView, Text, View } from "react-native"

import { CustomOptions } from "@/@types/navigation"

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
            const options = drawerProps.descriptors[route.key]
              .options as CustomOptions

            if (options.title === undefined) {
              return
            }

            const onPress = () => {
              const event = drawerProps.navigation.emit({
                type: "drawerItemPress",
                target: route.key,
                canPreventDefault: true
              })

              if (!isFocused && !event.defaultPrevented) {
                drawerProps.navigation.navigate(route.name, route.params)
              }
            }

            return (
              <View key={route.key}>
                {options.sectionTitle && (
                  <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
                    {options.sectionTitle}
                  </Text>
                )}

                <DrawerButton
                  onPress={onPress}
                  title={options.title}
                  iconName={options.iconName}
                  isFocused={isFocused}
                  isDivider={options.isDivider}
                  notifications={options.notifications}
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
