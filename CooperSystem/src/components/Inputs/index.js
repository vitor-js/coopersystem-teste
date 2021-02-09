import React, {useState} from 'react';
import { TextInput, StyleSheet ,Text, Keyboard, ImageBackground} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

const Inputs = ({message, label,secure,...rest}) => {

    const styles = StyleSheet.create({
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
       }
    })

    return (<>
        {label ? <Text style={styles.TextLabel}>{label}</Text> : null }
        <TextInputMask type={'money'} {...rest}
                options={{
                    unit: 'R$',
                }} placeholder={`${message ? message : ''}`} secureTextEntry={secure ? secure : false} style={[styles.input]}/>
      </>  
  )
}

export default Inputs;