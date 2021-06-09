import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#DADADA',
    paddingHorizontal: 20,
    paddingVertical: 9,
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  inputFocus: {
    borderColor: 'rgba(33,33,33,1)',
    color: 'black',
  },
  label: {
    fontSize: 12,
    paddingLeft: 17,
    fontFamily: 'Poppins',
    paddingBottom: 5,
    fontWeight: '400',
    lineHeight: 18,
  },
});

export interface InputProps extends TextInputProps {
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  focusStyle?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  handleChange: void;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  style,
  focusStyle,
  label='',
  handleChange,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const toggleFocusStyle = () => {
    setIsFocus(true);
  };

  const toggleDefaultStyle = () => {
    setIsFocus(false);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={'rgba(218, 218, 218, 1)'}
        style={
          isFocus
            ? {
                ...styles.input,
                ...(style as Object),
                ...styles.inputFocus,
                ...(focusStyle as Object),
              }
            : {...styles.input, ...(style as Object)}
        }
        onFocus={toggleFocusStyle}
        onBlur={toggleDefaultStyle}
        onChangeText={handleChange}
        name={label}
        {...props}
      />
    </View>
  );
};
