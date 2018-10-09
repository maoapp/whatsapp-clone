import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';

import { PRIMARY_COLOR } from '../../constants/constants';
import styles from './styles';

const HeaderChat = ({navigation, user}) => {
  const { picture, name } = user;

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={25} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerPicture}>
        <Image style={styles.userPicture} source={picture}/>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.status}>Online</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="call" size={25} color="white" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <IconFont name="paperclip" size={25} color="white" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="more-vert" size={25} color="white" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HeaderChat;
