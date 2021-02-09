import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../pages/WelcomePage/index'
import LoginScreen from '../pages/Login/index'
import RedemptionList from '../pages/RedemptionList/index'
import Redemption from '../pages/Redemption/index'

const Stack = createStackNavigator();

function Index() {

  const [configOption, setConfigOption] = useState({
      colorTextHeader:'white',
      backgroundColor:'#005AA5',
      borderBottomColor:'#EDD100',
      borderBottomWidth:5,
      height:65
  })

  return (
    <NavigationContainer>
        <Stack.Navigator  initialRouteName="WelcomeScreen">
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} 
             options={{ headerTransparent:true, title:''}}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} 
            options={{ headerTransparent:true, title:''}}/>
            <Stack.Screen name="RedemptionList" component={RedemptionList} 
            options={{
              title:'Resgate',
              headerTintColor: `${configOption.colorTextHeader}`,
              headerStyle:configOption}}/>
            <Stack.Screen name="Redemption" component={Redemption} 
            options={{
              title:'Resgate',
              headerTintColor: `${configOption.colorTextHeader}`,
              headerStyle:configOption}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;