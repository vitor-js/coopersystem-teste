import React, { useEffect, useState,useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator,TouchableOpacity,SafeAreaView,ScrollView,RefreshControl } from 'react-native';

import api from '../../services/api'

const RedemptionList = ({navigation}) => {

  const [refreshing, setRefreshing] = useState(false);
  const [investment, setInvestment] = useState(false)

  const onRefresh = useCallback(() => {
    getInvestment()
  }, []);
  
  const getInvestment = async () => {
    const { data: investment } = await api.get()
    const listInvestiments = investment.response.data.listaInvestimentos
    setInvestment(listInvestiments)
  }

  useEffect(()=> {
    getInvestment()
  },[])

  const onSubmit = (item) => {
    if(item.indicadorCarencia !== 'N') {
      return
    }
    navigation.push('Redemption', {
      item:item,
      list:item.acoes
    })
  }

  const Card = ({item}) => {
    const stylesCard = StyleSheet.create({
      BodyCard : {
        flexDirection:'row',
        justifyContent:'space-between',
    
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:`${item.indicadorCarencia !== 'N' ? '#E8E8E8' : "#fff"}`,
        borderBottomWidth:1.5,
        borderColor:'#DAD7D7',
        borderStyle:'solid'
      },
      BodyTitle: {
        fontSize:18,
        fontWeight:'bold',
        color:'#343434'
      },
      BodyDescription: {
        fontSize:15,
        fontWeight:'200',
        color:'#818080'
      }
    })
    return (
      <TouchableOpacity onPress={()=>onSubmit(item)}>
        <View style={stylesCard.BodyCard} >
          <View>
            <Text style={stylesCard.BodyTitle}>
                  {item.nome}
            </Text>
            <Text style={stylesCard.BodyDescription}>
                  {item.objetivo}
            </Text>
          </View>

            <Text style={stylesCard.BodyTitle}>
              {item.saldoTotalDisponivel && item.saldoTotalDisponivel.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>
      </View>
    </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView 
       refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />}>
          <View> 
              <View style={styles.Header} >
                  <Text style={styles.HeaderText}>
                      INVESTIMENTOS
                  </Text>
                  <Text style={styles.HeaderText}>
                      R$
                  </Text>
              </View>
            {investment ?<FlatList
                data={investment}
                renderItem={Card}
                keyExtractor={item => item.nome}
              /> : <ActivityIndicator style={styles.Loading} size="large" color="#0000ff"/>}
          </View>
        </ScrollView>
    </SafeAreaView>  
)}

const styles = StyleSheet.create({
  Container:{
    flex:1,
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
  Loading: {
    marginTop:50
  }
})

export default RedemptionList;