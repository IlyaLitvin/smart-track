import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {GET_ALL_ALERTS} from '../../https/query/Alerts';
import AlertsEllipse from '../AlertsEllipse/AlertsEllipse';
import CloseSVG from '../../assets/images/Close.svg';

interface IAlert {
  color: string;
  textColor: string;
  name: string;
}

interface IProps {
  show: boolean;
  onHide: () => void;
  alert?: IAlert;
}

export default function ModalDropDownMenu({show, onHide}: IProps) {
  const {data, loading, error} = useQuery(GET_ALL_ALERTS);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setAlerts(data.getAllAlerts);
      }
    } else {
      console.log(error);
    }
  }, [data, loading, error]);

  const chousebleAlert = () => {
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
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={onHide}>
            <Text style={styles.textStyle}>X</Text>
          </TouchableOpacity>
          <ScrollView style={styles.modalView}>
            {alerts.map((alert: IAlert, index: number) => (
              <TouchableOpacity key={index} onPress={chousebleAlert}>
                <View style={styles.wrapper}>
                  <View style={styles.modalItem}>
                    <AlertsEllipse
                      color={alert.color}
                      textColor={alert.textColor}
                      text={alert.name}
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
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
