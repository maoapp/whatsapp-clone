import React from 'react';
import { View, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const backgroundChat = require('../../assets/backgroundChat.jpg');

class ChatContent extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      messages: [
        {
          userId: 1,
          messages: [
            {
              time: '10:44',
              message: 'hey Ronaldo, How are you doing?',
              author: true,
              status: 'sent'
            },
            {
              time: '10:50',
              message: 'hey Mao, I am very fine and you',
              author: false
            },
            {
              time: '10:52',
              message: 'I am fine bro',
              author: true,
              status: 'checked'
            },
          ]
        },
        {
          userId: 2,
          messages: [
            {
              time: '10:44',
              message: 'hey Ronaldo, How are you doing?',
              author: false
            },
            {
              time: '10:50',
              message: 'hey Mao, I am very fine',
              author: false
            }
          ]
        }
      ]
    }

    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  onChangeMessage(message) {
    this.setState({
      message
    })
  }

  buildContent() {
    const { message, messages } = this.state;
    const { user } = this.props;
    const userMessages = messages.filter(message => message.userId === user.id)[0];
    let content = null;

    if (userMessages) {
      content = (
        userMessages.messages.map((item, index) => {
          const { author, time, message, status } = item;
          let statusContent = null;
  
          if (status) {
            if (status === 'sent') {
              statusContent = <IconMaterial name="check" color="#7d8080" size={15} style={styles.status}/>;
            } else if (status === 'received') {
              statusContent = <IconMaterial name="check-all" color="#7d8080" size={15} style={styles.status}/>;
            } else {
              statusContent = <IconMaterial name="check-all" color="#64a0de" size={15} style={[styles.status, {fontWeight: 'bold'}]}/>;
            }    
          }
          
          return (
            <View key={index} style={author ? styles.messageContainerAuthor : styles.messageContainer}>
              <Text>{message}</Text>
              <View style={styles.messageTimeContainer}>
                <Text style={styles.messageTime}>{time}</Text>
                {statusContent}
              </View>
            </View>
          )
        })
      )
    }

    return content;
  }

  render() {
    const { message } = this.state;

    return (
      <ImageBackground
        source={backgroundChat}
        style={styles.bodyBackground}
      >
        <View style={{flex: 17, paddingTop: 5}}>
          {this.buildContent()}
        </View>
          <View style={styles.textInputContainer}>
            <TouchableOpacity>
              <Icon name="insert-emoticon" size={20} color="lightgray"/>
            </TouchableOpacity>
            <TextInput 
              placeholder="Type a message" 
              placeholderTextColor="lightgray"
              style={{height: 50, width: 150}}
              value={message}
              onChangeText={ text => this.onChangeMessage(text)}
            />
            <View style={styles.fileAndPhoto}>
              <TouchableOpacity>
                <IconFont name="paperclip" size={20} color="lightgray" style={styles.icon}/>    
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="photo-camera" size={20} color="lightgray"/>    
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.voiceContainer}>
              {message ? <IconMaterial name="send" size={13} color="white"/> : <IconMaterial name="microphone" size={20} color="white"/>}
            </TouchableOpacity>
          </View>
      </ImageBackground>
    )
  }
}

  


export default ChatContent;
