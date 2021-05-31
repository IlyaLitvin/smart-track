import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {Button} from '../../common/button/Button';

type HeaderProps = {
  navigation: DrawerNavigationProp<any, any>;
};

export default function Staff({navigation}: HeaderProps) {
  return (
    <>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        <View style={styles.docWrapper}>
          <View style={{width: 36, backgroundColor: "#6AC7BE", opacity: 0.3, }}>
            <Text style={styles.postNumber}>1</Text>
          </View>
          <View style={styles.mainBox}>
            <Text style={styles.name}>Alex Sample</Text>
            <Text style={styles.mail}>frontdesk@gmail.com</Text>
            <Text style={styles.phone}>0959423146</Text>
            <View>
              <Text>Rooms</Text>
              <Text>1a, 1b, 3f</Text>
            </View>
            <View>
              <View></View>
              <View></View>
              <View></View>
              <View></View>
              <View></View>
              <View></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6F6FF",
      paddingLeft: 16,
      paddingRight: 16,
    },
    docWrapper: {
      backgroundColor: "#FFF",
      width: 327,
      height: 203,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginTop: 15,
    },
    postNumber: {

    },
    mainBox: {

    },
    name: {

    },
    mail: {

    },
    phone: {

    },
});