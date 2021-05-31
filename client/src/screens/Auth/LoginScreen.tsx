import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen({navigation}) {
  const [isShow, setIsShow] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShow(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const touchableKeyboardHide = () => {
    setIsShow(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={touchableKeyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{...styles.form, marginBottom: isShow ? 20 : 100}}>
            <View>
              <View style={styles.header}>
                <Text style={styles.headerLogo}>Logo</Text>
                <Text style={styles.headerLogo}>Burger Menu</Text>
              </View>
              <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
              <TextInput
                style={styles.input}
                textAlign={'center'}
                onFocus={() => setIsShow(true)}
                value={state.email}
                onChangeText={value =>
                  setState(prevState => ({...prevState, email: value}))
                }
              />
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                textAlign={'center'}
                secureTextEntry={true}
                onFocus={() => setIsShow(true)}
                value={state.password}
                onChangeText={value =>
                  setState(prevState => ({...prevState, password: value}))
                }
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btn}
              onPress={keyboardHide}>
              <Text style={styles.btnTitle}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={{
                marginTop: 20,
                alignSelf: 'center',
                backgroundColor: 'blue',
                height: 30,
              }}>
              <Text style={{color: '#fff'}}>
                Steel not account?{' '}
                <Text style={{fontSize: 20, color: 'red', marginLeft: 10}}>
                  Sign In
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    borderRadius: 6,
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: 'blue',
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  btnTitle: {
    color: '#fff',
    fontSize: 18,
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  headerLogo: {
    fontSize: 30,
    color: 'black',
  },
});
