import {DrawerNavigationProp} from '@react-navigation/drawer';

export type Alert = {
  id: number;
  name: string;
  color: string;
};
export type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};
