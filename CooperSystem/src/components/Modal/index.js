import React from 'react';
import { View,Modal,Text,StyleSheet,TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const ModalConfirm = ({isVisible,onClose}) => {
  const navigation = useNavigation();
  
  return(
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={Styles.Container}>
    </View>
    <View style={Styles.ContainerBody}>
          <View style={Styles.ContainerText}>
            <Text style={Styles.title}>
                Resgate efetuado com sucesso!
              </Text>
              <Text style={Styles.description}>
                O valor solicitado estará em sua conta em até 5 dias úteis
              </Text>
          </View>
          <View style={Styles.ButtonConfirm}>
            <TouchableOpacity onPress={()=>onClose()} >
              <Text style={Styles.textConfirmButton}>Efetuar novo resgate</Text>
            </TouchableOpacity>
          </View>
    </View>
    <View style={Styles.Container}>
    </View>
  </Modal>
  )
}

const Styles = StyleSheet.create({
  Container: {
    backgroundColor:'#2e212154',
    flex:1
  },
  ContainerBody: {
    backgroundColor:'#2e212154',
    flex:1.5,
    paddingHorizontal:20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    alignContent:'center',
  },
  Body: {
    backgroundColor:'#fff',
    width:'100%',
    height:'100%',
  },
  ContainerText:{
    backgroundColor:'#fff',
    justifyContent: 'flex-start',
    paddingVertical:20
  },
  title: {
    color:'#005AA5',
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center'
  },
  description: {
    color:'#12265dde',
    fontSize:20,
    fontWeight:'normal',
    textAlign:'center',
    marginTop:10
  },
  ButtonConfirm: {
    height:50,
    width:'100%',
    position:'absolute',
    backgroundColor:'#EDD100',
     bottom:4,
     justifyContent:'center',
     alignItems:'center',
},
textConfirmButton : {
 color:'#005AA5',
 fontSize:18,
 fontWeight:'bold',
}
})

export default ModalConfirm;