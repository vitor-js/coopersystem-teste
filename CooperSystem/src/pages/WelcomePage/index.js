import React from 'react';
import { View,Text,ImageBackground, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import FotoHome from '../../assets/Home.png'
import Submit from '../../components/Buttons/index'

const WelcomePage = () => {
  
  const navigation = useNavigation();

  return (
    <ImageBackground source={FotoHome} style={styles.Background}>
      <View style={styles.Container}>
        <Text style={styles.Titulo} >
            Banco do Brasil Seguros
        </Text>
        <Text style={styles.Text} >
            Tenha todo controle do seu seguro na palma da sua mão
        </Text>
      </View>
      <Submit message={'Abra sua conta'} color={'#EDD100'} pressFunction={() => navigation.navigate('RedemptionList')} />
      <Submit message={'Acesse sua conta'} color={'transparent'} style={styles.button} pressFunction={() => navigation.navigate('RedemptionList')} />
    </ImageBackground>
  )}

  const styles = StyleSheet.create({
    Background: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      padding:40
    },
    Titulo : {
      color:'#fff',
      fontSize:35,
      fontWeight:'700',
      lineHeight:40
    },
    Text: {
      color:'#EDD100',
      fontSize:20,
      fontWeight:'500',
      marginTop:10,
      lineHeight:25
    },
    Container: {
      flex:1,
      justifyContent:'center',
    },
    button : {
      marginTop:20,
      borderColor:'#fff',
      borderStyle:'solid',
      borderWidth:1
    }


  })

export default WelcomePage;