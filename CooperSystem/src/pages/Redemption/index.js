import React, { useEffect, useState } from 'react';
import { View,ScrollView,SafeAreaView, StyleSheet,ActivityIndicator,Text, KeyboardAvoidingView,TextInput,TouchableOpacity,Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Modal from '../../components/Modal/index'

import ListActions from './listActions.js'

const Redemption = ({ route, navigation}) => {
    const { item, list } = route.params;
    const [data, setData] = useState(false)
    const [actionsData, setActionsData] = useState(false)
    const [rescue, setRescue] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=> {
    setData(item)
    setActionsData(list)    
    },[])

    const onsubmitValue = ()=> {
        if(rescue > data.saldoTotalDisponivel) {
            Alert.alert(
                "Sldo insdisponível para saque",
                `apenas é possível solicitar valores abaixo de ${data.saldoTotalDisponivel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
            )
            return
        }
        setIsVisible(true)
    }
 
  return (
      <>
    {data ?<>
    <Modal isVisible={isVisible} onClose={()=>setIsVisible(false)}/>
    <SafeAreaView style={styles.Container}>
        <ScrollView> 

            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Dados do investimento</Text>
            </View>

            <View style={styles.Label}>
                <Text style={styles.Key}>
                    Nome
                </Text>
                
                <Text style={styles.Value}>
                    {data.nome}
                </Text>
            </View>

            <View style={styles.Label}>
                <Text style={styles.Key}>
                    Saldo Total Disponivel
                </Text>
                <Text style={styles.Value}>
                {data.saldoTotalDisponivel && data.saldoTotalDisponivel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Text>
            </View>

            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Resgate do seu jeito</Text>
            </View>

            <FlatList
            data={actionsData}
            keyExtractor={(actionsData) => actionsData.id}
            renderItem={({item, index}) =>  <ListActions data={item} index={index} rescue={rescue} setRescue={setRescue} totalValue={data.saldoTotalDisponivel} />}
            />

            <View style={styles.Label}>
                <Text style={styles.Key}>
                     Valor total a resgate
                </Text>
                            
                <Text style={styles.Value}>
                    {Number.isNaN(rescue) !== true ? `R$${rescue}` : `R$${0}` }
                </Text>
            </View>

            {rescue > data.saldoTotalDisponivel ?
            <View style={styles.Label} >
                <Text style={styles.Alert}> O valor não pode ser maior que { data.saldoTotalDisponivel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </View> : null}

            <View style={styles.ButtonConfirm}>
                <TouchableOpacity  onPress={()=>{onsubmitValue()}}>
                    <Text style={styles.textConfirmButton}>Realizar resgate</Text>
                </TouchableOpacity>
            </View>           
        </ScrollView>
    </SafeAreaView>
    </>
    :<ActivityIndicator style={styles.Loading} size="large" color="#0000ff"/>}
    </>
)}

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
           fontWeight:'700'
       },
       ButtonConfirm: {
           height:50,
           width:'100%',
           backgroundColor:'#EDD100',
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