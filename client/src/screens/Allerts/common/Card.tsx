import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EditSvg from '../../../assets/images/Edit.svg';
import AlertsEllipse from '../../../components/AlertsEllipse/AlertsEllipse';
interface CardProps {
  item: {
    id: Number;
    name: String;
    color: String;
  };
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 15,
  },
  key: {
    width: '10%',
    height: '100%',
    backgroundColor: 'rgba(106, 199, 190, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
  },
  wrapperBody: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '4.444%',
    paddingRight: '3.9111%',
    width: '90%',
  },
  wrapperOptins: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svg: {
    width: 19,
    height: 19,
    marginLeft: 17.92,
  },
});

export default function Card({item}: CardProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.key}>
        <Text style={styles.text}>{item.id}</Text>
      </View>
      <View style={styles.wrapperBody}>
        <Text style={styles.text}>{item.name}</Text>
        <View>
          <View style={styles.wrapperOptins}>
            <AlertsEllipse />
            <EditSvg style={styles.svg} />
          </View>
        </View>
      </View>
    </View>
  );
}
