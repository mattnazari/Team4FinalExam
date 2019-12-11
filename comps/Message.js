import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity, Animated, Text, TextInput, Image, StyleSheet} from 'react-native';

function Message (){

  return(

    <Animated.View>

        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width:'auto', height:100, backgroundColor:'rgb(80,100,120)', borderRadius:10}}>

          <Image 
            style={{ margin:20,  width:50, height:50, borderRadius:50, borderColor:'green', borderWidth:2}}
            source={require('./default-placeholder.png')}
          />
          <View style={{flexDirection:'row', marginRight:20, width:'auto', alignItems:'center', justifyContent:'center',}} >
            <Text style={MessageStyle.GuestText}>guest: </Text>
            <Text style={MessageStyle.GuestMessage}>Default Message</Text>
          </View>
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
