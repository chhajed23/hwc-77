
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/LoginScreen'

export default class App extends React.Component {
   render(){
       return(
           <View>
               <SignupLoginScreen/>
           </View>
       )
   }
}