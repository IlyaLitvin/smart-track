/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from '../../assets/SizeControl/SizeControl';
import AlertsEllipse from '../AlertsEllipse/AlertsEllipse';
import ModalDropDownMenu from '../Modals/ModalDropDownMenu';

export interface IRoom {
  id: number;
  name: string;
  timeStatus: string;
  status: {
    id: number;
    name: string;
    color: string;
    textColor: string;
  };
}
interface IProps {
  room: IRoom;
}

export default function Room({room}: IProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View key={room.id} style={styles.roomContainer}>
        <View
          style={{
            height: verticalScale(31),
            backgroundColor: '#FAFCFF',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            borderTopLeftRadius: scale(20),
            borderTopRightRadius: scale(20),
          }}>
          <View
            style={{
              width: scale(46),
              height: verticalScale(31),
              backgroundColor: '#6AC7BE',
              opacity: 0.3,
              borderTopLeftRadius: scale(20),
              borderBottomRightRadius: scale(20),
              position: 'absolute',
              left: 0,
              top: 0,
            }}></View>
          <Text
            style={{
              color: '#212155',
              fontWeight: '500',
              fontSize: scale(14),
              lineHeight: verticalScale(19),
            }}>
            {room.name}
          </Text>
          <Text style={styles.roomR}>R</Text>
          <Text
            style={{
              color: '#FC7E55',
              fontWeight: '500',
              fontSize: scale(14),
              lineHeight: verticalScale(21),
            }}>
            {room.timeStatus}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginTop: scale(17),
          }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AlertsEllipse
              {...(room.status
                ? room.status
                : {color: 'transparent', style: {borderColor: 'black'}})}
            />
            <Text style={{fontSize: scale(15), marginTop: scale(10)}}>
              {room.status ? room.status.name : 'Empty'}
            </Text>
          </TouchableOpacity>
        </View>
        <ModalDropDownMenu
          room={room}
          show={modalVisible}
          onHide={() => setModalVisible(false)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  roomContainer: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {
      width: scale(5),
      height: verticalScale(5),
    },
    elevation: 5,
    shadowOpacity: 0.8,
    width: scale(156),
    height: verticalScale(146),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
    marginHorizontal: scale(4),
    marginBottom: scale(15),
  },
  roomR: {
    color: '#6AC7BE',
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: verticalScale(18),
    borderWidth: scale(1),
    borderRadius: scale(11.5),
    borderColor: '#6AC7BE',
    paddingRight: scale(6),
    paddingLeft: scale(8),
    paddingTop: scale(2),
    paddingBottom: scale(1),
    marginRight: scale(16),
  },
  roomStatus: {
    width: scale(50),
    height: verticalScale(50),
    marginTop: scale(16),
    marginLeft: scale(53),
  },
});
