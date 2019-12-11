import React from 'react';
import {} from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Button from './Button';
import ImageComp from './ImageComp';
import Message from './Message';
import DefTextInput from './TextInput';
import Tabs from './Tabs';


storiesOf("Final Exam Comps", module)
.add("Button", ()=>{
    return(
        <Button
        />
    )
})
.add("Image", ()=>{
    return(
        <ImageComp
        />
    )
})
.add("Message", ()=>{
    return(
        <Message/>
    )
})
.add("TextInput", ()=>{
    return(
        <DefTextInput/>
    )
})
.add("Tabs", ()=>{
    return(
        <Tabs/>
    )
})

    