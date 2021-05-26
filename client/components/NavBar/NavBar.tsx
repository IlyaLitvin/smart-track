import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import BurgerMenu from '../../assets/image/Group 1710.svg';

export default function NavBar() {
    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.headerLogo}>Logo</Text>
                <BurgerMenu style={{width: 10, height: 10}} />
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
    headerBurger: {
        
    },
  });