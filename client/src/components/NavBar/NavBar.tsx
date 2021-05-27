import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import BurgerMenu from '../../assets/image/Group 1710.svg';

export default function NavBar() {
    const openMenu = () => {
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.headerLogo}>Logo</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={openMenu}>
                <BurgerMenu style={{width: 10, height: 10}} />
                </TouchableOpacity>
            </View> 
        </View>       
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#212155",
        paddingLeft: 16,
        paddingRight: 16,
    },
    header: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerLogo: {
        fontStyle: "normal",
        fontSize: 24,
        color: "#fff",        
        lineHeight: 36,
        fontWeight: "600",
    },
  });