/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
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
    paddingVertical: 11,
    borderColor: '#D3D3FF',
    paddingHorizontal: 20,
    position: 'absolute',
    width: '100%',
    borderRadius: 20,
    left: 0,
    backgroundColor: 'white',
    zIndex: 9999,
  },
  wrapperSelect: {
    position: 'relative',
    width: 200,
  },
});

interface OptionTypes {
  id: number;
  name: string;
}

interface PickerTypes {
  options: Array<OptionTypes>;
  onSelect: (option: OptionTypes) => void;
}

export default function Picker({options, onSelect}: PickerTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('Unselected');
  const toggleSelect = () => setIsOpen(!isOpen);
  const onPress = (option: OptionTypes) => {
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
            <Text>{el.name}</Text>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
