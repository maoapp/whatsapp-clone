import React from 'react';
import { View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const backgroundChat = require('../../assets/backgroundChat.jpg');

const ChatContent = () => (
  <ImageBackground
      source={backgroundChat}
      style={styles.bodyBackground}
    >
      <View style={{flex: 8}}></View>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TouchableOpacity>
            <Icon name="insert-emoticon" size={20} color="lightgray"/>
          </TouchableOpacity>
          <TextInput 
            placeholder="Type a message" 
            placeholderTextColor="lightgray"
          />
          <TouchableOpacity>
            <Icon name="photo-camera" size={20} color="lightgray"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.voiceContainer}>
            <IconMaterial name="microphone" size={30} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
)

export default ChatContent;
