import React,{useState,useEffect}from 'react';
import {View, Image, TouchableOpacity, Animated, Text} from 'react-native';

const Button = () =>{

  const [butWidth] = useState(new Animated.Value(0));
  const [butHeight] = useState(new Animated.Value(0));

  var mybutWidth = butWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "35%"]
  });

  var mybutHeight = butHeight.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "10%"]
  });

  useEffect(()=>{
    Animated.timing(butHeight, {
      toValue: 1,
      duration: 500
    }).start();
    Animated.timing(butWidth, {
      toValue: 1,
      duration: 500
    }).start();
  })

  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity style={{flexDirection:"row", alignItems:'center', backgroundColor:'pink', borderRadius:15, padding:10,width:mybutWidth,height:mybutHeight}}>
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
