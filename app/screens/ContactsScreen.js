import React from 'react';
import { Image } from 'react-native';

import Header from '../components/Header'

const Contacts = ({navigation}) => (
  <Image
    style={{width: 50, height: 50}}
    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
  />
);

export default Contacts;
