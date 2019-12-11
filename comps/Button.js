import React,{useState,useEffect}from 'react';
import {View, Image, TouchableOpacity, Animated, Text} from 'react-native';

const Button = (title, bgcolor) =>{

  const [butWidth] = useState(new Animated.Value(0));
  const [butHeight] = useState(new Animated.Value(0));
  const [imgwd] = useState(new Animated.Value(0));

  useEffect(()=>{
    Animated.timing(butHeight, {
      toValue: 50,
      duration: 500
    }).start();
    Animated.timing(butWidth, {
      toValue: 100,
      duration: 500
    }).start();
    Animated.timing(imgwd, {
      toValue: 20,
      duration: 500
    }).start();
  })

  var bgcolor = 'pink';
  var title = ' Default\n Button';

  return(
    <View style={{flex:1, alignItems:'center', paddingLeft:20}}>
      <TouchableOpacity style={{flexDirection:"row", alignItems:'center', backgroundColor:bgcolor, borderRadius:15, padding:10,width:butWidth,height:butHeight}}>
      <Animated.Image
      style={{width:imgwd, height:imgwd}}
      source={{uri:'https://static.thenounproject.com/png/68669-200.png'}}
      />
      <Text style={{color:'white'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button;
