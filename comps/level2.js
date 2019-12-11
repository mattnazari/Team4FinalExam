import React from 'react';
import {} from 'react-native';

import { storiesOf } from '@storybook/react-native';

import SendBar from './SendBar';
import Profile from './Profile';
import MessageBoard from './MessageBoard';
import Menu from './Menu';


storiesOf("Combined Comps", module)
.add("Send Bar", ()=>{
    return(
        <SendBar
        />
    )
})
.add("Profile", ()=>{
    return(
        <Profile
        />
    )
})
.add("MessageBoard", ()=>{
    return(
        <MessageBoard/>
    )
})
.add("Menu", ()=>{
    return(
        <Menu/>
    )
})

    