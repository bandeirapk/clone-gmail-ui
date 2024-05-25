import { Pressable, Text, View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import clsx from "clsx"

import { colors } from "@/styles/colors"

export function DrawerButton() {
  const isDivider = false
  const isFocused = false

  return (
    <Pressable
      className={clsx("py-2 w-full", {
        "border-b ml-10 border-gray-500": isDivider
      })}
    >
      <View
        className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2", {
          "-ml-14": isDivider
        })}
      >
        <MaterialIcons
          name="email"
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />

        <Text
          className={clsx("text-white font-subtitle text-base flex-1 ", {
            "text-orange-300": isFocused
          })}
        >
          Todas as caixas de e-mails
        </Text>
      </View>
    </Pressable>
  )
}
