import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context'

export default class Header extends React.Component{
 render(){
  return (
    <View style={{alignContent:'center'}}>
     <SafeAreaProvider>
      <Text style={{backgroundColor:'red',alignSelf:'center',width:1700,height:20,textAlign:'center'}}>
       Pocket Dictionary
      </Text>
     </SafeAreaProvider>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    
  },
});