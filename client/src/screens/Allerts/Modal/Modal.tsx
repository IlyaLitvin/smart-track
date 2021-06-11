import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Button} from '../../../common/button/Button';
import {Input} from '../../../common/inputs/Input';
import AlertsEllipse from '../../../components/AlertsEllipse/AlertsEllipse';
import {GET_ALL_COLORS_ALERTS} from '../../../https/query/OtherQuery';
import {Alert} from '../../../types/OtherTypes';

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
    borderRadius: 20,
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

interface ModalProps {
  style?: StyleProp<ViewStyle>;
  onSave(item: Alert | {name: string; color: string}): void;
  alert: Alert;
}

export default function Modal({style, onSave, alert}: ModalProps) {
  const {data: colors} = useQuery<Colors>(GET_ALL_COLORS_ALERTS);
  const [value, setValue] = useState(
    alert.id < 0 ? alert : {name: '', color: ''},
  );

  const onPress = () => {
    onSave(value);
  };
  const onChange = (text: string) => setValue({...value, name: text});

  return (
    <View style={styles.modal}>
      <View style={[styles.wrapper, style]}>
        <Text>Add Allert</Text>
        <Input
          value={value.name}
          handleChange={onChange}
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
                    setValue({...value, color: color.value});
                  }}>
                  <AlertsEllipse
                    color={color.value}
                    style={{
                      ...styles.ellipse,
                      ...(value.color === color.value
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
