import React, {useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Animated,StyleSheet} from 'react-native';

function DefaultTab() {

    const [tabWidth] = useState(new Animated.Value(0));

    var myTabWidth = tabWidth.interpolate({
        inputRange: [0,1],
        outputRange: ['0%','25%']
    })

    useEffect(()=>{
        Animated.timing(
            tabWidth,
            {
                toValue:1,
                duration:500
            }
        ).start();
    },[])

    // const styles = StyleSheet.create({
    //     MainContainer:{
    //         width:{myTabWidth},
    //         height:'10%',
    //         backgroundColor:'lightGreen'
    //     }
    // })

    return(
        <Animated.View style={{
            width:myTabWidth,
            height:'10%',
            backgroundColor:'blue',
            display:'flex',
            alignItems:'center',}}>
            <Image
                style={{width:'20%',height:'20%'}}
                source={{uri:"https://static.thenounproject.com/png/21837-200.png"}}
            />
            <Text>Default Tab</Text>
        </Animated.View>
    );
}


export default DefaultTab;