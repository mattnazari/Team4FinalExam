import React from 'react';
import {} from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Button from './Button';
import Image from './Image';
import Message from './Message';
import TextInput from './TextInput';
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
        <Image
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
        <TextInput/>
    )
})
.add("Tabs", ()=>{
    return(
        <Tabs/>
    )
})

    