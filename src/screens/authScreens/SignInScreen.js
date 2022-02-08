import React, { useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import Header from '../../components/Header';
import { colors, parameters, title } from '../../global/styles';

export default function SignInScreen({navigation}) {

  const [inputPasswordFocussed, setInputPasswordFocussed] = useState(false);
  const inputEmail = useRef(1);
  const inputPassword = useRef(2);

  return (
    <View>
      <Header title='MINHA CONTA' navigation={navigation} />

      <View style={styles.containerTitle}>
        <Text style={title}>Entrar</Text>
      </View>

      <View style={styles.containerSubtitle}>
        <Text style={styles.subtitle}>Digite o e-mail e senha</Text>
        <Text style={styles.subtitle}>cadastrados em sua conta</Text>
      </View>

      <View style={styles.containerForm}>
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

      <View style={styles.containerButton}>
        <Button 
          title='Entrar'
          buttonStyle = {parameters.styledButton}
          titleStyle = {parameters.buttonTitle}
        />
      </View>

      <View style={styles.containerTextForgetPass}>
        <Text style={styles.textForgetPass}>Esqueceu a senha?</Text>
      </View>

      <View style={styles.containerTextOr}>
        <Text style={styles.textOr}>OU</Text>
      </View>

      <View style={styles.containerSocialButton}>
        <SocialIcon 
          title='Entrar com Facebook'
          button
          type='facebook'
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={styles.containerSocialButton}>
        <SocialIcon 
          title='Entrar com Google'
          button
          type='google'
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={styles.containerTextNew}>
        <Text style={styles.textNew}>Novo no XpressFood?</Text>
      </View>

      <View style={styles.containerCreateButton}>
        <Button
          title='Criar uma conta'
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTitle: {
    marginLeft: 20,
    marginTop: 10,
  },

  containerSubtitle: {
    alignItems: 'center',
    marginTop: 10,
  },

  subtitle: {
    color: colors.grey3,
    fontSize: 16,
  },

  containerForm: {
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
    paddingHorizontal: 15,
  },

  inputPassword: {
    flex: 1,
  },

  containerButton: {
    marginHorizontal: 20,
    marginTop: 30,
  },

  containerTextForgetPass: {
    alignItems: 'center',
    marginTop: 15,
  },

  textForgetPass: {
    color: colors.grey3,
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  containerTextOr: {
    alignItems: 'center',
    marginVertical: 30,
  },

  textOr: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  containerSocialButton: {
    marginHorizontal: 10,
    marginTop: 10,
  },

  socialIcon: {
    borderRadius: 12,
    height: 50,
  },

  containerTextNew: {
    marginTop: 15,
    marginLeft: 25,
  },

  textNew: {
    color: colors.grey3,
    fontSize: 16,
  },

  containerCreateButton: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },

  createButton: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    alignContent: 'center',
    justifyContent: 'center',
    color: colors.buttons,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -3,
  },
});
