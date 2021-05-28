import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6AC7BE',
    borderRadius: 20,
    width: '100%',
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFocus: {
    backgroundColor: 'rgba(106, 199, 190, 0.5)',
    borderWidth: 2,
    borderColor: '#212155',
    color: '#212155',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  focusStyle?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  text: string;
  onPress: () => any;
}

export function Button({style, focusStyle, text, onPress}: ButtonProps) {
  const [isFocus, setIsFocus] = useState(false);

  function onShowUnderlay() {
    setIsFocus(true);
  }

  function onHideUnderlay() {
    setIsFocus(false);
  }

  return (
    <TouchableHighlight
      onShowUnderlay={onShowUnderlay}
      onHideUnderlay={onHideUnderlay}
      onPress={onPress}
      underlayColor={styles.buttonFocus.backgroundColor}
      style={
        isFocus
          ? {
              ...styles.button,
              ...(style as Object),
              ...styles.buttonFocus,
              ...(focusStyle as Object),
            }
          : {...styles.button, ...(style as Object)}
      }>
      <Text
        style={{
          ...styles.text,
          color: isFocus ? styles.buttonFocus.color : styles.text.color,
        }}>
        {text}
      </Text>
    </TouchableHighlight>
  );
}
