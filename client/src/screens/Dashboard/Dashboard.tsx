import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../../components/Header/Header';

export default function Dashboard({navigation}) {
    return (
        <>
        <Header navigation = {navigation}/>
        <View style={styles.container}>
            <View style={styles.doctorInfoWrapper}>
                <Text style={styles.doctorName}>Benedict Cumberbatch</Text>
                <Text style={styles.doctorProf}>Therapist</Text>
                <TouchableOpacity style={styles.resetBtn}>
                    <Text style={{color: "#6AC7BE", fontSize: 12, fontWeight: "500", lineHeight: 18}}>Reset</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 61, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={{marginRight: 15}}>
                    <Text style={{color: "#212155", fontWeight: "500", fontSize: 18, lineHeight: 27}}>-</Text>
                </TouchableOpacity >
                <Text style={{marginRight: 15, color: "#FC7E55", fontWeight: "500", fontSize: 18, lineHeight: 27}}>5</Text>
                <TouchableOpacity style={{marginRight: 19}}>
                    <Text style={{color: "#212155", fontWeight: "500", fontSize: 18, lineHeight: 27}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{color: "#969696", fontWeight: "500", fontSize: 14, lineHeight: 21}}>in line</Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity>
                    <Text style={styles.stopBtn}>Stop the line</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.roomContainer}>
                    <View style={{height: 31, backgroundColor: "#FAFCFF", justifyContent: "space-around", alignItems: "center", flexDirection: "row", borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                        <View style={{width: 46, height: 31, backgroundColor: "#6AC7BE", opacity: 0.3, borderTopLeftRadius: 20, borderBottomRightRadius: 20, position: "absolute", left: 0, top: 0}}></View>
                        <Text style={{color: "#212155", fontWeight: "500", fontSize: 14, lineHeight: 21}}>1b</Text>
                        <Text style={styles.roomR}>R</Text>
                        <Text style={{color: "#FC7E55", fontWeight: "500", fontSize: 14, lineHeight: 21}}>Timer</Text>
                    </View>
                    <Text style={styles.roomStatus} >4</Text>
                    <ModalDropdown defaultValue={"Empty"} options={['Assistant In', 'Assistant Required', 'Doctor In', 'Doctor Required', 'Patient in', 'Financial In', 'Financial Required', 'Emergency']}/>
                </View>                
            </View>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6ff',      
      paddingLeft: 16,
      paddingRight: 16,
    },
    doctorInfoWrapper: {      
      height: 100,
      borderBottomColor: '#C0E7E5',
      borderBottomWidth: 1,
      paddingTop: 20,
      paddingBottom: 20,
    },
    doctorName: {
      fontWeight: "500",
      fontSize: 18,
      lineHeight: 21,
      color: "#212121",
      marginBottom: 10,
    },
    doctorProf: {
      fontWeight: "500",
      fontSize: 14,
      lineHeight: 21,
      color: "#4F4F4F",
    },
    resetBtn: {
      position: "absolute",
      right: 16,
      top: 21,
      borderWidth: 1,
      borderColor: "#6AC7BE",
      borderRadius: 8,
      paddingRight: 13,
      paddingLeft: 13,
      paddingTop: 3,
      paddingBottom: 3,
    },
    stopBtn: {
        color: "#FC7E55",
        fontWeight: "500", 
        fontSize: 12, 
        lineHeight: 18, 
        borderWidth: 1, 
        borderColor: "#FC7E55", 
        borderRadius: 20,
        paddingRight: 13,
        paddingLeft: 13,
        paddingTop: 3,
        paddingBottom: 3,
    },
    roomContainer: {
        backgroundColor: "#fff",
        shadowColor: "black",
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
    },
    roomR: {
        color: "#6AC7BE", 
        fontWeight: "500", 
        fontSize: 12, 
        lineHeight: 18, 
        borderWidth: 1, 
        borderRadius: 11.5, 
        borderColor: "#6AC7BE",
        paddingRight: 6,
        paddingLeft: 8,
        paddingTop: 2,
        paddingBottom: 1,
    },
    roomStatus: {
        width: 50,
        height: 50,
        color: "#FC7E55",
        fontWeight: "500",
        fontSize: 30,
        lineHeight: 45,
        textAlign: "center",
        alignItems: "center",
        marginTop: 16,
        marginLeft: 53,
        borderWidth: 2,
        borderColor: "#F2D775",
        borderRadius: 25,
        backgroundColor: "rgba(242, 215, 117, 0.19)",        
    },
});