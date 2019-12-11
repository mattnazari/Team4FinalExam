import React from 'react';
import {View, Image, TouchableOpacity, Animated, Text} from 'react-native';

const Button = () =>{

  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity style={{flexDirection:"row", alignItems:'center', backgroundColor:'pink', borderRadius:20, padding:10}}>
      <Image
      style={{width:50, height:50}}
      source={{uri:'https://static.thenounproject.com/png/68669-200.png'}}
      />
      <Text style={{color:'white'}}>{'Default\nButton'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button;
