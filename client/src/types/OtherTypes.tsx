import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Room} from '../screens/Sequence/DragAndDrop/DragAndDrop';
import {StyleProp, TextStyle} from 'react-native';

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

export interface AlertsEllipseProps {
  color: string;
  style?: StyleProp<TextStyle>;
  name?: string;
  textColor?: string;
}

export interface IAssistant {
  id: number;
  name: string;
  email: string;
  phone: string;
}
export interface IAssistantProps {
  assistant: IAssistant;
  index: number;
  assistantDelete?: (assistantId: number) => void;
  assistantUpdate?: (assistantId: number, assistant: IAssistant) => void;
}

export interface IDoctor {
  id: number;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  rooms?: [];
}

export interface IDoctorProps {
  doctor: IDoctor;
  index: number;
  docDelete?: (doctorId: number) => void;
  doctorUpdate?: (doctorId: number, doctor: IDoctor) => void;
}
