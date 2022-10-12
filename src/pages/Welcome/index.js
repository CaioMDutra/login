import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

const navigation = useNavigation();

 return (
   <View style={styles.counteiner}>
      <View style={styles.couteninerLogo}>
        <Animatable.Image
        animation="flipInY"
        
          source={require('../../assets/logo.png')}
          style={{width: '100%'}}
          resizeMode="contain"


          />
      </View>

      <Animatable.View delay={750} animation="fadeInUp" style={styles.counteinerForm}>
        <Text style={styles.title}>Monitore e organize seus carros</Text>
        <Text style={styles.text} >Faça Login para acessar</Text>

        <TouchableOpacity
        onPress={()=> navigation.navigate('SingIn')}
         style={styles.buttom}>
          <Text style={styles.buttomText}>Acessar</Text>
        </TouchableOpacity>

      </Animatable.View>
    
   </View>
  );
}

const styles = StyleSheet.create({
  counteiner:{
    flex:1,
    backgroundColor:"#708090"

  },
  couteninerLogo:{
    flex:2,
    justifyContent:"center",
    alignItems: "center",
  },
  counteinerForm:{
    flex:1,
    backgroundColor:"#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
    paddingStart: '5%',
    paddingEnd: '5%',

  },

title:{
  fontSize:24,
  fontWeight:"bold",
  marginTop: 28,
  marginBottom: 12,
},
text:{
  color:"#a1a1a1"
},
buttom:{
  position:'absolute',
  backgroundColor: "#FF4500",
  borderRadius: 50,
  paddingVertical: 8,
  width: '60%',
  alignSelf: "center",
  bottom: '15%',
  alignItems: "center",
  justifyContent: "center",

},
buttomText:{
  fontSize: 18,
  color: "#fff",
  fontWeight:"bold"
}

})