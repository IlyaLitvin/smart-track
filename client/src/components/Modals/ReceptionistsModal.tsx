import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from '../../common/inputs/Input';
import Plus from '../../assets/images/plus.svg';
import { Button } from '../../common/button/Button';

const receptData = {
  name: "",
  email: "",
  phone: "",
};

export default function ReceptionistsModal({show, onHide, saveReceptionist, receptUpdate, receptionist = null}) {
  const [data, setData] = useState(receptionist || receptData);

  const addReceptionist = () => {
    if(receptionist) {
        receptUpdate(data.id, data)
    } else {
        saveReceptionist(data);
        setData(receptData);
    };
    onHide();    
  };

  const newReceptionist = (val, key) => {
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
                  <Input value={data.name} handleChange={(text) => newReceptionist(text, 'name')} style={{width: 300, marginBottom: 15}} label="Name"/>
                  <Input value={data.email} handleChange={(text) => newReceptionist(text, 'email')} style={{width: 300, marginBottom: 15}} label="Email"/>
                  <Input value={data.phone} handleChange={(text) => newReceptionist(text, 'phone')} style={{width: 300, marginBottom: 25}} label="Phone number"/>
                  <Text style={styles.alerts}>Alerts</Text>
                  <TouchableOpacity style={styles.addAlertBtn}>
                      <Plus style={{width: 2, height: 2}} />
                  </TouchableOpacity>
                  <Button onPress={addReceptionist} text="Save" />
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