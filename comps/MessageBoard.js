import React from 'react';
import {View} from 'react-native';

import Message from './Message';
import TextInput from './TextInput';

function MessageBoard (){

  return(

    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

      <Message />

      <TextInput />
        
    </View>

  )

}

export default MessageBoard;
