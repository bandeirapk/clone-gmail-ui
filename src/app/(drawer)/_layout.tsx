import { Drawer } from "expo-router/drawer"

import { DrawerContent } from "@/components/Drawer-content"

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%"
        }
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="(tabs)" />
    </Drawer>
  )
}
