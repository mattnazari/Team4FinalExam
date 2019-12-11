import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity, Animated, Text, TextInput, Image, StyleSheet} from 'react-native';

function Message (){

  const [op_value] = useState(new Animated.Value(0));
  const [wd_value] = useState(new Animated.Value(0));

  const [msgcolor,setmsgcolor] = useState('rgb(80,100,120)');

  Animated.timing(
    wd_value,
    {
      toValue:50,
      duration:500,
      delay:100
    }
  ).start();

  Animated.timing(
    op_value,
    {
      toValue:1,
      duration:500,
      delay:100
    }
  ).start();

  return(

    <Animated.View style={{opacity:op_value, alignItems:'center', padding:15}}>

        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width:'auto', height:100, backgroundColor:msgcolor, borderRadius:10}}>

          <Animated.Image 
            style={{opacity:op_value, margin:20,  width:wd_value, height:wd_value, borderRadius:50, borderColor:'green', borderWidth:2}}
            source={require('./default-placeholder.png')}
          />
          <Animated.View style={{flexDirection:'row', marginRight:20, width:'auto', alignItems:'center', justifyContent:'center',}} >
            <Text style={MessageStyle.GuestText}>guest: </Text>
            <Text style={MessageStyle.GuestMessage}>Default Message</Text>
          </Animated.View>
        </TouchableOpacity>

    </Animated.View>

  )
}

var MessageStyle = StyleSheet.create({

  GuestText:{
    fontSize:15,
  },
  GuestMessage:{
    color:'azure',
    fontSize:15
  }

})

export default Message;
