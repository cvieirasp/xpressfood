import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import Header from '../../components/Header';
import { colors, parameters, title } from '../../global/styles';

export default function SignInScreen() {

  const [inputPasswordFocussed, setInputPasswordFocussed] = useState(false);
  const inputEmail = useRef(1);
  const inputPassword = useRef(2);

  return (
    <View>
      <Header title='MINHA CONTA' />

      <View style={styles.titleContainer}>
        <Text style={title}>Entrar</Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Digite o e-mail e senha</Text>
        <Text style={styles.subtitle}>cadastrados em sua conta</Text>
      </View>

      <View style={styles.formContainer}>
        <View>
          <TextInput style={styles.inputEmail} placeholder='Email' ref={inputEmail} />
        </View>

        <View style={styles.containerPassword}>
          <Animatable.View animation={inputPasswordFocussed?"fadeInRight":""}>
            <Icon name='lock' iconStyle={styles.icon} type='material' />
          </Animatable.View>
            
          <TextInput 
            style={styles.inputPassword}
            placeholder='Senha'
            ref={inputPassword}
            onFocus={() => {
              setInputPasswordFocussed(true)
            }}
            onBlur={() => {
              setInputPasswordFocussed(false)
            }}
          />
          
          <Animatable.View animation={inputPasswordFocussed?"fadeInLeft":""}>
            <Icon name='visibility-off' iconStyle={styles.icon} type='material' />
          </Animatable.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    marginLeft: 20,
    marginTop: 10,
  },

  subtitleContainer: {
    alignItems: 'center',
    marginTop: 10,
  },

  subtitle: {
    color: colors.grey3,
    fontSize: 16,
  },

  formContainer: {
    marginTop: 20,
  },

  inputEmail: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey3,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingLeft: 15,
  },

  icon: {
    color: colors.grey3,
  },

  containerPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',    
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey3,
    marginHorizontal: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },

  inputPassword: {
    flex: 1,
  },
});
