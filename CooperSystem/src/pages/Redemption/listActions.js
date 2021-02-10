import React, { useEffect, useState } from 'react';
import { View,ScrollView,SafeAreaView, StyleSheet,ActivityIndicator,Text, KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

const Redemption = ({data, index,totalValue,rescue,setRescue}) => {

const [request, setRequest] = useState(0)
const [balance, setBalance] = useState()

useEffect(()=>{
    const balance = ( totalValue * data.percentual ) / 100 
    setBalance(balance)
},[])

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const submit = (e) => {
    const valueUpdate = e.replace('R$','')
    wait(2000).then(() => setRescue(parseInt(rescue) + parseInt(valueUpdate)))    
}


  return (
      <>
    <View style={{marginTop:index !== 0 ? 50 : 0}}>
        <View style={styles.Label}>
            <Text style={styles.Key}>
                Ação
            </Text>
            <Text style={styles.Value}>
                 {data.nome} 
            </Text>
        </View>
        <View style={styles.Label}>
            <Text style={styles.Key}>
            Saldo acumulado
            </Text>
            <Text style={styles.Value}>
                {balance && balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
            </Text>
        </View>
        <KeyboardAvoidingView>
            <View style={styles.LabelForm}>
            <Text style={styles.TextLabel}>Valor a resgatar</Text>
            <TextInputMask   mask={"R$[9999999999999][99]"} keyboardType = 'numeric'  value={request} onChangeText={(e)=>{submit(e)}} style={[styles.input]}/>
            </View>
        </KeyboardAvoidingView>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    Container:{
      flex:1,
    },
    Loading: {
        marginTop:50
      },
    Header: {
        backgroundColor:'#E8E8E8',
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    HeaderText: {
        fontSize:18,
        fontWeight:'bold',
        color:'#818080'
      },
    Label: {
        backgroundColor:'#fff',
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1.5,
        borderColor:'#DAD7D7',
        borderStyle:'solid',
      },
      LabelForm: {
        backgroundColor:'#fff',
        padding:20,
        flexDirection:'column',
        justifyContent:'space-between',
        borderBottomWidth:1.5,
        borderColor:'#DAD7D7',
        borderStyle:'solid',
      },
    Key:{
        fontSize:18,
        fontWeight:'bold',
        color:'#343434'
    },
    Value: {
        fontSize:18,
        fontWeight:'bold',
        color:'#818080'
    },
    input:{
        borderColor:'#454545',
        borderBottomWidth:1,
        borderStyle:'solid',
        width:'100%',
        height:50,
        color:'#000',
        padding:0,
        fontSize:20
       },
       TextLabel : {
        fontSize:15,
       },
       Alert: {
           color:'red',
           marginTop:10
       },
       ButtonConfirm: {
           height:50,
           width:'100%',
           backgroundColor:'#EDD100',
           position:'absolute',
            bottom:4,
            justifyContent:'center',
            alignItems:'center'
       },
       textConfirmButton : {
        color:'#005AA5',
        fontSize:18,
        fontWeight:'bold',
       }
})
export default Redemption;