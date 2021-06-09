import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Button} from '../../../common/button/Button';
import {Input} from '../../../common/inputs/Input';
import AlertsEllipse from '../../../components/AlertsEllipse/AlertsEllipse';
import {GET_ALL_COLORS_ALERTS} from '../../../https/query/OtherQuery';

const styles = StyleSheet.create({
  modal: {
    minWidth: '100%',
    minHeight: Dimensions.get('window').height,
    backgroundColor: 'rgba(229, 229, 229,0.4)',
    position: 'absolute',
    left: 0,
    top: 0,
    justifyContent: 'center',
    paddingHorizontal: '7.777%',
  },
  wrapper: {
    backgroundColor: 'white',
    paddingTop: 55,
    paddingBottom: 35,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  input: {
    minWidth: '95%',
    marginTop: 12,
    marginBottom: 25,
  },
  label: {
    marginBottom: 13,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  wrapperColors: {
    flexDirection: 'row',
    minWidth: '95%',
    maxWidth: '95%',
    flexWrap: 'wrap',
    alignItems: 'center',
    minHeight: 59,
    marginLeft: '5%',
    marginBottom: 32,
  },
  ellipse: {
    width: 45,
    height: 45,
    marginRight: 25,
    marginBottom: 24,
  },
  ellipseActive: {width: 59, height: 59},
  button: {
    minWidth: '95%',
    maxWidth: '95%',
    marginHorizontal: '2.5%',
  },
});

type Colors = {
  getAllColorsAlerts: [{id: number; value: string}];
};

export default function Modal({style, onSave}) {
  const {data: colors} = useQuery<Colors>(GET_ALL_COLORS_ALERTS);
  const [selectedColor, setSelectedColor] = useState('');
  const [name, setName] = useState('');

  const onPress = () => {
    onSave({name, color: selectedColor});
  };
  return (
    <View style={styles.modal}>
      <View style={{...styles.wrapper, ...style}}>
        <Text>Add Allert</Text>
        <Input
          value={name}
          handleChange={setName}
          label="Name"
          style={styles.input}
        />
        <View>
          <Text style={styles.label}>Color</Text>
          <View style={styles.wrapperColors}>
            {colors?.getAllColorsAlerts.map(color => {
              return (
                <TouchableWithoutFeedback
                  key={color.id}
                  onPress={() => {
                    setSelectedColor(color.value);
                  }}>
                  <AlertsEllipse
                    color={color.value}
                    style={{
                      ...styles.ellipse,
                      ...(selectedColor === color.value
                        ? styles.ellipseActive
                        : {}),
                    }}
                  />
                </TouchableWithoutFeedback>
              );
            })}
          </View>
          <Button onPress={onPress} style={styles.button} text="Save" />
        </View>
      </View>
    </View>
  );
}
