import React from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Header from '../../components/Header/Header';
import Doctor from '../../components/Doctor/Doctor';

type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};

export default function Dashboard({navigation}: HeaderProps) {
    return (
        <>
        <Header navigation = {navigation}/>
        <ScrollView style={styles.container}>
            <Doctor />
            <Doctor />
            <Doctor />
        </ScrollView>
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
});


