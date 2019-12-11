import React from 'react';
import {View} from 'react-native';

import Message from './Message';
import Button from './Button';

function MessageBoard (){

  return(

    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>

      <Message />

      <Button 
        title="send"
        bgcolor="#4AF"
      />
        
    </View>

  )

}

export default MessageBoard;
