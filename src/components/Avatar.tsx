import { Image, ImageProps } from "react-native"

import clsx from "clsx"

type AvatarProps = ImageProps & {
  size?: "small" | "medium"
}

export function Avatar({ size = "small", ...rest }: AvatarProps) {
  return (
    <Image
      className={clsx("rounded-full", {
        "w-8 h-8": size === "small",
        "w-12 h-12": size === "medium",
      })}
      {...rest}
    />
  )
}
