import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const ImagePerfilDetail = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={25} color="white"/>
      </TouchableOpacity>
      <Text style={styles.textName}>{navigation.state.params.userActive.name}</Text>
      <Icon name="share" size={25} color="white" style={styles.shareIcon}/>
    </View>
    <View style={styles.containerPicture}>
      <Image source={navigation.state.params.userActive.picture} style={styles.picture}/>
    </View>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    width
  },
  containerPicture: {
    paddingTop: 100
  },
  picture: {
    width,
    height: height / 2
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30,
    flexGrow: 6,
  }
})

export default ImagePerfilDetail;
