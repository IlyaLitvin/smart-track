import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../../components/Header/Header';

export default function Dashboard({navigation}) { 7 
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
                    <Text>-</Text>
                </TouchableOpacity >
                <Text style={{marginRight: 15}}>5</Text>
                <TouchableOpacity style={{marginRight: 19}}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>in line</Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity>
                    <Text>Stop the line</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View>
                <View>
                    <Text>1b</Text>
                    <Text>R</Text>
                    <Text>Timer</Text>
                    <Text>4</Text>
                    <ModalDropdown defaultValue={"Empty"} options={['Assistant In', 'Assistant Required', 'Doctor In', 'Doctor Required', 'Patient in', 'Financial In', 'Financial Required', 'Emergency']}/>
                </View>                
            </View>
        </View>
        </>
    );
}

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
});