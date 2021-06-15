import {useMutation, useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {UPDATE_ROOM} from '../../https/mutations/Room';
import {GET_ALL_ALERTS} from '../../https/query/Alerts';
import AlertsEllipse from '../AlertsEllipse/AlertsEllipse';
import {IRoom} from '../Room/Room';

interface IStatusAlert {
  id: number;
  color: string;
  textColor: string;
  name: string;
}

interface IProps {
  show: boolean;
  onHide: () => void;
  status?: IStatusAlert;
  handleChange?: (id: number, status: IStatusAlert) => void;
  room: IRoom;
}

export default function ModalDropDownMenu({show, onHide, room}: IProps) {
  const {data, loading, error} = useQuery(GET_ALL_ALERTS);
  const [alerts, setAlerts] = useState([]);
  const [updateRoom] = useMutation(UPDATE_ROOM);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setAlerts(data.getAllAlerts);
      }
    } else {
      console.log(error);
    }
  }, [data, loading, error]);

  const statusUpdate = (alertId: number) => {
    updateRoom({
      variables: {
        roomId: room.id,
        roomInput: {id: room.id, statusId: +alertId},
      },
    });
    onHide();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={show}>
        <View style={styles.centeredView}>
          <ScrollView style={styles.modalView}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onHide}>
              <Text style={styles.textStyle}>X</Text>
            </TouchableOpacity>
            {alerts.map((alert: IStatusAlert, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => statusUpdate(alert.id)}>
                <View style={styles.wrapper}>
                  <View style={styles.modalItem}>
                    <AlertsEllipse
                      color={alert.color}
                      textColor={alert.textColor}
                      name={alert.name}
                    />
                    <Text style={styles.alertName}>{alert.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    width: '100%',
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    height: 62,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  modalItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F6FAF9',
  },
  button: {
    position: 'relative',
    borderRadius: 20,
    elevation: 2,
    marginBottom: 10,
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
    alignContent: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  alertName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#212121',
  },
});
