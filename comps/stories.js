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
        title="button 1"
        />
    )
})

    