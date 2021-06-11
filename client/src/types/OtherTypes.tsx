import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Room} from '../screens/Sequence/DragAndDrop/DragAndDrop';

export type Alert = {
  id: number;
  name: string;
  color: string;
};
export type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};

export type Doctor = {
  id: number;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  rooms?: Room[];
};
