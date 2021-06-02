import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Picker from '../../common/inputs/Picker';
import Header from '../../components/Header/Header';
import DragAndDrop from './DragAndDrop/DragAndDrop';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14,
  },
  wrapper: {
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
});
type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};
export default function Sequence({navigation}: HeaderProps) {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Choose a Doctor</Text>
          <Picker options={[]} onSelect={e => console.log(e)} />
        </View>
        <DragAndDrop
          rooms={[]}
          assignedRooms={[]}
          onDelete={console.log}
          onEdit={console.log}
          onSelect={console.log}
        />
      </View>
    </>
  );
}
