import React, { useState, useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

import { colors, parameters, title } from '../../global/styles';

export default function SignInWelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>DESCUBRA RESTAURANTES</Text>
        <Text style={styles.title}>EM SUA ÁREA</Text>
      </View>


      <View style={styles.containerSlide}>
        <Swiper
          autoplay={true}
          >
          <View style={styles.slide1}>
            <Image
              source={{uri:'https://www.seekpng.com/png/detail/25-255623_food-restaurant-plate-board-restaurant-food-dinner-plate.png'}}
              style={styles.image}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{uri:'https://www.kindpng.com/picc/m/139-1392782_food-png-food-png-images-in-hd-transparent.png'}}
              style={styles.image}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{uri:'https://www.seekpng.com/png/detail/89-891255_fast-food-png-food.png'}}
              style={styles.image}
            />
          </View>
          <View style={styles.slide4}>
            <Image
              source={{uri:'https://st.depositphotos.com/1010050/2297/i/600/depositphotos_22978544-stock-photo-assorted-ice-cream.jpg'}}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.containerButton}>
        <View style={styles.containerButtonSignIn}>
          <Button 
            title='Entrar'
            buttonStyle = {parameters.styledButton}
            titleStyle = {parameters.buttonTitle}
          />
        </View>

        <View style={styles.containerCreateButton}>
          <Button
            title='Criar uma conta'
            buttonStyle={styles.buttonCreate}
            titleStyle={styles.buttonCreateTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTitle: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20
  },

  title: {
    fontSize: 26,
    color: colors.buttons,
    fontWeight: 'bold',
  },

  containerSlide: {
    flex: 4,
    justifyContent: 'center',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd6eb'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97cae5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92bbd9'
  },

  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#83a8c3'
  },

  image: {
    width: '100%',
    height: '100%',
  },

  containerButton: {
    flex: 4,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  containerButtonSignIn: {
    marginHorizontal: 20,
    marginTop: 30,
  },

  containerCreateButton: {
    marginTop: 20,
    marginHorizontal: 20,
  },

  buttonCreate: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    paddingHorizontal: 20,
  },

  buttonCreateTitle: {
    alignContent: 'center',
    justifyContent: 'center',
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
});
