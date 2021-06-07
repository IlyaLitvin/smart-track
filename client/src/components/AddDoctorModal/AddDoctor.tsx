import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from '../../common/inputs/Input';
import Plus from '../../assets/images/plus.svg';
import { Button } from '../../common/button/Button';

export default function AddDoctor({show, onHide, saveDoctor}) {
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");  
  const [specialization, setSpecialization] = useState("");  

  const addDoctor = () => {
    saveDoctor({name,email,phone,specialization})
    onHide();
    setName('');
    setPhone('');
    setEmail('');
    setSpecialization('');
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
                  <Input value={name} onChangeText={setName} style={{width: 300, marginBottom: 15}} label="Name"/>
                  <Input value={email} onChangeText={setEmail}  style={{width: 300, marginBottom: 15}} label="Email"/>
                  <Input value={specialization} onChangeText={setSpecialization}  style={{width: 300, marginBottom: 15}} label="Specialization"/>
                  <Input value={phone} onChangeText={setPhone}  style={{width: 300, marginBottom: 25}} label="Phone number"/>
                  <Text style={styles.alerts}>Alerts</Text>
                  <TouchableOpacity style={styles.addAlertBtn}>
                      <Plus style={{width: 2, height: 2}} />
                  </TouchableOpacity>
                  <Button onPress={()=> addDoctor()} text="Save" />
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

{/* <View style={styles.modalContainer}>
            <Modal
                style={styles.modalContainer}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableOpacity
                    onPress={()=>history.goBack()}
                >
                    <Text>Назад</Text> 
                </TouchableOpacity>  
                <Text>Add new doctor</Text>
                <Input label="Name"/>
                <Input label="Email"/>
                <Input label="Phone number"/>
            </Modal>
        </View> */}

// const styles = StyleSheet.create({
//     modalContainer: {
//         flex: 1,
//         backgroundColor: "#fff",
//         justifyContent: "center",
//         alignItems: "center"
//     },
// });