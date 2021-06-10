import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import EditSvg from '../../assets/images/Edit.svg';
import TrashSvg from '../../assets/images/trash-2 2.svg';
import { DELETE_RECEPTIONIST, UPDATE_RECEPTIONIST } from '../../https/mutations/Receptionist';
import { GET_ALL_RECEPTIONISTS } from '../../https/query/Receptionist';
import ReceptionistsModal from '../Modals/ReceptionistsModal';

export interface IReceptionist {
  id: number,
  name: string,
  email: string,
  phone: string
};

interface IProps {
  receptionist: IReceptionist,
  index: number,
  receptDelete?: (receptionistId: number) => void,
  receptUpdate?: (receptionistId: number, receptionist: IReceptionist) => void,
}

export default function Receptionists({receptionist, index}: IProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteReceptionist] = useMutation(DELETE_RECEPTIONIST);
    const [updateReceptionist] = useMutation(UPDATE_RECEPTIONIST);

    const receptDelete = (id: number) => {
      deleteReceptionist({
        variables: {receptionistId: id},
        refetchQueries: [{query: GET_ALL_RECEPTIONISTS}]
      });
    };

    const receptUpdate = (id: number, receptionist: IReceptionist) => {
        const updatedReceptionist = {
            name: receptionist.name,
            email: receptionist.email,
            phone: receptionist.phone,
        };
        updateReceptionist({
            variables: {receptionistId: id, receptionistInput: updatedReceptionist},
            refetchQueries: [{query: GET_ALL_RECEPTIONISTS}],
        })
    }

  return ( 
      <View key={receptionist.id} style={styles.recepWrapper}>
        <View style={{width: 36, height: "100%", backgroundColor: "#6AC7BE", opacity: 0.3, borderTopLeftRadius: 20 }}></View>          
        <Text style={styles.postNumber}>{index}</Text>
        <View style={styles.mainBox}>
        <Text style={styles.name}>{receptionist.name}</Text>
        <Text style={styles.mail}>{receptionist.email}</Text>
        <Text style={styles.phone}>{receptionist.phone}</Text>
        </View>
        <View style={{flexDirection: "row", position: "absolute", right: 12, top: 12}}>
        <TouchableOpacity onPress={()=> setModalVisible(true)} >
            <EditSvg style={{width: 15, height: 15, marginRight: 29}} />
        </TouchableOpacity>  
        <TouchableOpacity onPress={()=> receptDelete(receptionist.id)} >
            <TrashSvg style={{width: 20, height: 20}}/>
        </TouchableOpacity>  
        </View>
        <ReceptionistsModal show={modalVisible} receptUpdate={receptUpdate} receptionist={receptionist} onHide={()=> setModalVisible(false)} />
      </View>
  );
};

const styles = StyleSheet.create({
    recepWrapper: {
      backgroundColor: "#FFF",
      width: 327,
      height: 157,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginTop: 15,
      flexDirection: "row",
    },
    postNumber: {
      position: "absolute",
      top: 15,
      left: 15,
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 24,
      color: "#212121",
    },
    mainBox: {
      paddingTop: 40,
      paddingLeft: 23,
      paddingBottom: 20,
    },
    name: {
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 19,
      color: "#212121",
      marginBottom: 20,
    },
    mail: {
      fontSize: 14,
      lineHeight: 21,
      color: "#212121",
      marginBottom: 8,
    },
    phone: {
      fontSize: 14,
      lineHeight: 21,
      color: "#212121",
      marginBottom: 8,
    },
});