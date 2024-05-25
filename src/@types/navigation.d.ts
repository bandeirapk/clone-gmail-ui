import {DrawerNavigationOptions} from '@react-navigation/drawer'
import { IconNameProps } from '@/components/Drawer-button'

interface CustomOptions extends DrawerNavigationOptions {
  iconName: IconNameProps
  isDivider?: boolean
  notifications?: number
  sectionTitle? : string
}