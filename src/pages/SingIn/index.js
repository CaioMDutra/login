import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function SingIn() {
 return (
   <View style={styles.counteiner}>
    <Animatable.View animation="fadeInLeft" delay={650} style={styles.counteinerHeader}>
    <Text style={styles.welcome}>Bem vindo(a)</Text>
    </Animatable.View>

    <Animatable.View animation="fadeInUp" style={styles.counteinerForm}>
      <Text style={styles.title}>Email</Text>
      <TextInput style={styles.input} placeholder='digite seu email'></TextInput>

      <Text style={styles.title}>Senha</Text>
      <TextInput style={styles.input} placeholder='digite sua senha'></TextInput>

      <TouchableOpacity style={styles.buttom}>
      <Text style={styles.buttomText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttomRegister}>
      <Text style={styles.registerText}>Criar conta</Text>
    </TouchableOpacity>

    </Animatable.View>

    


   </View>
  );
}

const styles = StyleSheet.create({
  counteiner:{
    flex: 1,
    backgroundColor: '#FF4500',
  },
  counteinerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  welcome:{
    fontSize: 28,
    fontWeight: "bold",
    color:"#fff"
  },
  counteinerForm:{
    backgroundColor:"#fff",
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: '5%'
  },
  title:{
    fontSize: 20,
    marginTop: 28,
  }, 
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom:12,
    fontSize: 16,
  },
  buttom:{
    backgroundColor:"#FF4500",
    width: "100%",
    borderRadius:8,
    paddingVertical:8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center"

  },
  buttomText:{
    color: "#fff",
    fontSize:18,
    fontWeight:'bold'
  },
  buttomRegister:{
    marginTop:14,

  },
  registerText:{
    color:"#a1a1a1"
  }
  
})