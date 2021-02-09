import React from 'react';
import { View,Text,StyleSheet, KeyboardAvoidingView,Keyboard, TouchableOpacity, Image, SafeAreaView} from 'react-native';

import InputText from '../../components/Inputs'
import Submit from '../../components/Buttons'


const login = () => {
    const styles = StyleSheet.create({
        Container : {
            flex:1,
            justifyContent:'center',
            padding:30
        },
        ContainerText : {
            
        },
        TextTitulo : {
            fontSize:30,
            fontWeight:'700',
            color:'#26173e'
        },
        TextDescription : {
            fontSize:30,
            fontWeight:'400',
            color:'#fe761c'
        }
    })
  return (
      <>
            <TouchableOpacity style={styles.Container} activeOpacity={1} onPress={()=>{Keyboard.dismiss()}} >
                <View style={styles.ContainerText}>
                    <Text style={styles.TextTitulo}>
                        Hey, faça seu login agora
                    </Text>
                    <Text style={styles.TextDescription}>
                        e comece a investir.
                    </Text>
                </View>

            
                <View style={styles.ContainerInputs} >
                    <KeyboardAvoidingView>
                        <InputText message={'Email'}/>
                        <InputText message={'Senha'} secure={true}/>
                    </KeyboardAvoidingView>    
                </View>
                

                <View>
                    <Submit message={'Continuar'} style={{marginTop:35}} />
                    <Submit message={'Cadastre-se'} color={'#fe761c'} style={{marginTop:20}} />
                </View>  
            </TouchableOpacity>

    </>
  );
}

export default login;