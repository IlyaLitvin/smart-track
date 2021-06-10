/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import AlertsEllipse from '../AlertsEllipse/AlertsEllipse';

export interface IRoom {
  id: number;
  name: string;
  timeStatus: string;
  status: string;
}
interface IProps {
  room: IRoom;
}

export default function Room({room}: IProps) {
  return (
    <>
      <View key={room.id} style={styles.roomContainer}>
        <View
          style={{
            height: 31,
            backgroundColor: '#FAFCFF',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              width: 46,
              height: 31,
              backgroundColor: '#6AC7BE',
              opacity: 0.3,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              position: 'absolute',
              left: 0,
              top: 0,
            }}></View>
          <Text
            style={{
              color: '#212155',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 21,
            }}>
            {room.name}
          </Text>
          <Text style={styles.roomR}>R</Text>
          <Text
            style={{
              color: '#FC7E55',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 21,
            }}>
            {room.timeStatus}
          </Text>
        </View>
        <AlertsEllipse
          text="D"
          textColor="red"
          color="rgba(228, 133, 243, 0.19)"
          style={styles.roomStatus}
        />
        <View style={{width: '100%', alignItems: 'center', marginTop: 17}}>
          <ModalDropdown
            defaultValue={'Empty'}
            options={[
              'Empty',
              'Assistant In',
              'Assistant Required',
              'Doctor In',
              'Doctor Required',
              'Patient in',
              'Financial In',
              'Financial Required',
              'Emergency',
            ]}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  roomContainer: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 5,
    shadowOpacity: 0.8,
    width: 156,
    height: 146,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginHorizontal: 4,
    marginBottom: 15,
  },
  roomR: {
    color: '#6AC7BE',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
    borderWidth: 1,
    borderRadius: 11.5,
    borderColor: '#6AC7BE',
    paddingRight: 6,
    paddingLeft: 8,
    paddingTop: 2,
    paddingBottom: 1,
    marginRight: 16,
  },
  roomStatus: {
    width: 50,
    height: 50,
    marginTop: 16,
    marginLeft: 53,
  },
});
