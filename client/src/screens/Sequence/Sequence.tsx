import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Picker from '../../common/inputs/Picker';
import Header from '../../components/Header/Header';
import Card from './Card/Card';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14,
  },
  wrapper: {
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
});
export default function Sequence({navigation}) {
  const [value, setValue] = useState({name: '', id: 0});
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Choose a Doctor</Text>
          <Picker
            options={[
              {id: 1, name: 'Black Black'},
              {id: 2, name: 'Black1 Black'},
              {id: 3, name: 'Black2 Black'},
              {id: 4, name: 'Black 3Black'},
              {id: 5, name: 'Black5 Black'},
              {id: 7, name: 'Black6 Black'},
              {id: 72, name: 'Black6 Black'},
              {id: 73, name: 'Black6 Black'},
              {id: 74, name: 'Black6 Black'},
              {id: 75, name: 'Black6 Black'},
              {id: 76, name: 'Black6 Black'},
            ]}
            onSelect={setValue}
          />
        </View>
        <Card />
      </View>
    </>
  );
}
