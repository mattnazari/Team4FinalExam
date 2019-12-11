import React from 'react';
import {View} from 'react-native';

import Message from './Message';
import TextInput from './TextInput';
import Button from './Button';

function MessageBoard (){

  return(

    <View style={{flex:1}}>

      <View style={{flex:1, margin:50}}>
        <Message />
        <Message 
          setmsgcolor="blue"
        />
        <Message />
      </View>

      <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row', position:"absolute", bottom:0, width:'auto', height:'auto'}}>

       <TextInput />
       <Button
       />

      </View>
        
    </View>

  )

}

export default MessageBoard;
