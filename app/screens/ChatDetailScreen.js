import React from 'react';
import { View } from 'react-native';

import HeaderChat from '../components/header/HeaderChat';
import ChatContent from '../components/chatContent/ChatContent';

const ChatDetail = ({navigation}) => (
  <View style={{flex: 1}}>
    <HeaderChat {...{navigation}} user={navigation.state.params.userActive}/>
    <ChatContent user={navigation.state.params.userActive}/>
  </View>
)

export default ChatDetail;
