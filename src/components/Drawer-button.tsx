import { Pressable, PressableProps, Text, View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import clsx from "clsx"

import { colors } from "@/styles/colors"

export type IconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = PressableProps & {
  title: string
  isDivider?: boolean
  isFocused?: boolean
  iconName: IconNameProps
  notifications?: number
}

export function DrawerButton({
  title,
  isDivider,
  isFocused,
  iconName,
  notifications,
  ...rest
}: DrawerButtonProps) {
  return (
    <Pressable
      className={clsx("py-2 w-full", {
        "border-b border-gray-500": isDivider
      })}
      {...rest}
    >
      <View
        className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full", {
          "-ml-1": isDivider
        })}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />

        <Text
          className={clsx("text-white font-subtitle text-base flex-1 ", {
            "text-orange-300": isFocused
          })}
        >
          {title}
        </Text>

        <Text
          className={clsx("text-gray-400 text-sm font-body", {
            "text-orange-300": isFocused
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}
