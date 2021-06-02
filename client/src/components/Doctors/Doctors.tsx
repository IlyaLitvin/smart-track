import React, {useEffect, useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {GET_ALL_DOCTORS} from '../../https/query/Doctor';
import EditSvg from '../../assets/images/Edit.svg';
import TrashSvg from '../../assets/images/trash-2 2.svg';

export default function Doctors() {
  const {data, loading, error} = useQuery(GET_ALL_DOCTORS);
  const [doctors, setDoctors] = useState([]);

  useEffect(()=>{
    if(!loading) {
      setDoctors(data.getAllDoctors);
    };
  },[data,loading]);

  return (
    <>
    <View style={styles.docWrapper}>
        <View style={{width: 36, height: "100%", backgroundColor: "#6AC7BE", opacity: 0.3, borderTopLeftRadius: 20 }}></View>          
        <Text style={styles.postNumber}>1</Text>
        <View style={styles.mainBox}>
        <Text style={styles.name}>Alex Sample</Text>
        <Text style={styles.mail}>frontdesk@gmail.com</Text>
        <Text style={styles.phone}>0959423146</Text>
        <View style={{flexDirection: "row"}}>
            <Text style={styles.rooms}>Rooms</Text>
            <Text style={styles.roomsName}>1a, 1b, 3f</Text>
        </View>
        <View style={{flexDirection: "row"}}>
            <View style={{width: 15, height: 15, borderRadius: 7.5, backgroundColor: "#63BFF2", marginRight: 10}}></View>
            <View style={{width: 15, height: 15, borderRadius: 7.5, backgroundColor: "#939DFF", marginRight: 10}}></View>
            <View style={{width: 15, height: 15, borderRadius: 7.5, backgroundColor: "#F2D775", marginRight: 10}}></View>
            <View style={{width: 15, height: 15, borderRadius: 7.5, backgroundColor: "#74C386", marginRight: 10}}></View>
            <View style={{width: 15, height: 15, borderRadius: 7.5, backgroundColor: "#FC6666", marginRight: 10}}></View>
            <View style={{width: 15, height: 15, borderRadius: 7.5, backgroundColor: "#FFF", borderWidth: 2, borderColor: "#DDDDDD"}}></View>
        </View>
        </View>
        <View style={{flexDirection: "row", position: "absolute", right: 12, top: 12}}>
        <TouchableOpacity>
            <EditSvg style={{width: 15, height: 15, marginRight: 29}} />
        </TouchableOpacity>  
        <TouchableOpacity>
            <TrashSvg style={{width: 20, height: 20}}/>
        </TouchableOpacity>  
        </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    docWrapper: {
      backgroundColor: "#FFF",
      width: 327,
      height: 203,
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
    rooms: {
      fontWeight: "600",
      fontSize: 14,
      lineHeight: 21,
      color: "#212121",
      marginBottom: 8,
      marginRight: 20,
    },
    roomsName: {
      fontWeight: "500",
      fontSize: 14,
      lineHeight: 21,      
      marginBottom: 8,
      color: "#212121",
    },
});