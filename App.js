import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context'
import Header from './header'
import defdb from './defdb'

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
     def:"",
     definition:[]
    }
  }
 render(){
  return (
    <View >
     <SafeAreaProvider>
      <Header/>
      <TextInput style={{width:200,height:20,borderWidth:2,alignSelf:'center',marginTop:20}}
     onChangeText={(data)=>{this.setState({
       def:data
     })}}/>
     <TouchableOpacity style={{
       width:200,
       height:30,
       borderWidth:2,
       backgroundColor:"orange",
       alignSelf:"center",
       alignItems:"center",
       marginTop:30
     }}
     onPress={()=>{
       var c=this.state.def.toLowerCase()
       defdb[c]?
       (this.setState({
         definition: defdb[c].definition
       })):
       (alert("Only the word banana works because I am lazy."))
     }}
     >
       <Text>Submit</Text>
     </TouchableOpacity>
       <Text>{this.state.definition}</Text>
     </SafeAreaProvider>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    
  },
});
