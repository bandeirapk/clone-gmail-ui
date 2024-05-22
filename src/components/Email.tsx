import { Text, View } from "react-native"

import { MaterialIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { EmailDataProps } from "@/utils/email"

import { Avatar } from "./Avatar"

type EmailProps = {
  data: EmailDataProps
}

export function Email({ data }: EmailProps) {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar
        source={{ uri: data.avatar }}
        size="medium"
      />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={colors.yellow[600]}
            />
          )}

          <Text className="text-lg font-subtitle text-gray-300 flex-1">
            {data.name}
          </Text>

          <Text className="text-sm font-body text-gray-300">{data.date}</Text>
        </View>

        <Text
          className="text-base font-body text-gray-300"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-300 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>

          <MaterialIcons
            name={data.start ? "star" : "star-outline"}
            size={22}
            color={data.start ? colors.yellow[600] : colors.gray[400]}
          />
        </View>
      </View>
    </View>
  )
}
