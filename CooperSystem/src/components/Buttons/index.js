import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Buttons = ({pressFunction = () => {} ,message, style,color,...rest}) => {
    const styles = StyleSheet.create({
        button: {
            textAlign:'center',
            width:'100%',
            height:50,
            backgroundColor:`${color ? color :'#26173e'}`,
            borderRadius:5,
            alignItems:'center',
            textAlign:'center',
            justifyContent:'center'
        },
        message: {
           fontSize:20,
           fontWeight:'800',
           color:'#fff'
        }
    })
  return (
    <TouchableOpacity style={[style && style , styles.button ]} onPress={() => pressFunction()}>
        <Text style={styles.message} >{message ? message : 'continuar'}</Text>
    </TouchableOpacity>
  )
}

export default Buttons;