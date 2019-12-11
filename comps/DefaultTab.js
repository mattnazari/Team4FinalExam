import React, {useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Animated} from 'react-native';

function DefaultTab() {

    const [tabWidth] = useState(new Animated.Value(0));

    var myTabWidth = tabWidth.interpolate({
        inputRange: [0,1],
        outputRange: ['0%','10%']
    })

    useEffect(()=>{
        Animated.timing(
            
        )
    })

    return(
        <Animated.View style={{width:myTabWidth,height:'10%'}}>
            <Text>Hello</Text>
        </Animated.View>
    );
}

export default DefaultTab;