import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {Button} from '../../../common/button/Button';
import {Input} from '../../../common/inputs/Input';
import {Room} from '../DragAndDrop/DragAndDrop';

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
    zIndex: 9999,
    elevation: 999,
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

  button: {
    minWidth: '95%',
    maxWidth: '95%',
    marginHorizontal: '2.5%',
  },
});

interface ModalProps {
  style?: StyleProp<ViewStyle>;
  onSave(item: Room | {name: string}): void;
  room: Room | null;
}

export default function Modal({style, onSave, room}: ModalProps) {
  const [value, setValue] = useState<Room | {name: string}>(room || {name: ''});

  const onPress = () => {
    onSave(value);
  };
  const onChange = (text: string) => setValue({...value, name: text});
  return (
    <View style={styles.modal}>
      <View style={[styles.wrapper, style]}>
        <Text>Add new Room</Text>
        <Input
          value={value.name}
          handleChange={onChange}
          label="Name"
          style={styles.input}
        />
        <View>
          <Button onPress={onPress} style={styles.button} text="Save" />
        </View>
      </View>
    </View>
  );
}
