/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 20,
    borderColor: '#D3D3FF',
    fontFamily: 'Poppins',
    fontWeight: '400',
    borderWidth: 1,
    fontSize: 14,
  },
  scroll: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#D3D3FF',
    paddingHorizontal: 20,
    position: 'absolute',
    width: '100%',
    borderRadius: 20,
    shadowColor: 'white',
    left: 0,
    backgroundColor: 'white',
    zIndex: 9999,
    elevation: Platform.OS === 'android' ? 50 : 0,
    shadowOpacity: 0,
  },
  wrapperSelect: {
    position: 'relative',
    width: 200,
  },
  option: {
    marginTop: 11,
  },
});

interface OptionTypes {
  id: number;
  name: string;
}

interface PickerTypes<T> {
  options: Array<T & OptionTypes>;
  onSelect: (option: T) => void;
}

export default function Picker<T>({options, onSelect}: PickerTypes<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('Unselected');
  const toggleSelect = () => setIsOpen(!isOpen);
  const onPress = (option: T & OptionTypes) => {
    setValue(option.name);
    toggleSelect();
    onSelect(option);
  };
  return (
    <View style={styles.wrapperSelect}>
      <TouchableWithoutFeedback onPress={toggleSelect}>
        <Text style={styles.input}>{value}</Text>
      </TouchableWithoutFeedback>
      <ScrollView style={isOpen ? styles.scroll : {display: 'none'}}>
        {options.map(el => (
          <TouchableWithoutFeedback
            key={el.id}
            onPress={() => {
              onPress(el);
            }}>
            <Text style={styles.option}>{el.name}</Text>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
