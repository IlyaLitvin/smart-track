import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from '../../common/inputs/Input';
import Plus from '../../assets/images/plus.svg';
import { Button } from '../../common/button/Button';

const docData = {
  name: "",
  email: "",
  phone: "",
  specialization: "",
};

interface IProps {
  show: ()=> void,
  onHide: ()=> void,
  doctorUpdate: (data: {
    name: string,
    email: string,
    phone: string,
  }) => void,
  saveDoctor: (data: {
    name: string,
    email: string,
    phone: string,
  })=> void,
  doctor: null,
};

export default function DoctorsModal({show, onHide, doctorUpdate, saveDoctor, doctor = null}: IProps) {
  const [data, setData] = useState(doctor || docData);

  const addDoctor = () => {
    if(doctor) {
      doctorUpdate(data.id, data)
    } else {
      saveDoctor(data);
      setData(docData);
    };
    onHide();    
  };

  const newDoc = (val: string, key: number) => {
    setData({
      ...data,
      [key]: val,
    });
  };

  return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
        >
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={onHide}
                  >
                  <Text style={styles.textStyle}>X</Text>
                  </TouchableOpacity> 
                  <Text style={styles.addTitle}>Add new doctor</Text>
                  <Input value={data.name} handleChange={(text) => newDoc(text, 'name')} style={{width: 300, marginBottom: 15}} label="Name"/>
                  <Input value={data.email} handleChange={(text) => newDoc(text, 'email')} style={{width: 300, marginBottom: 15}} label="Email"/>
                  <Input value={data.specialization} handleChange={(text) => newDoc(text, 'specialization')} style={{width: 300, marginBottom: 15}} label="Specialization"/>
                  <Input value={data.phone} handleChange={(text) => newDoc(text, 'phone')} style={{width: 300, marginBottom: 25}} label="Phone number"/>
                  <Text style={styles.alerts}>Alerts</Text>
                  <TouchableOpacity style={styles.addAlertBtn}>
                      <Plus style={{width: 2, height: 2}} />
                  </TouchableOpacity>
                  <Button onPress={addDoctor} text="Save" />
              </View>
          </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      flex: 1,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      width: "100%"
    },
    button: {
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      elevation: 2,
      position: "absolute",
      right: 5,
      top: 5
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    addTitle: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        color: "#212121",
    },
    alerts: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 21,
        color: "#212121",
        alignSelf: "flex-start"
    },
    addAlertBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#6AC7BE",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        marginBottom: 31
    },
  });