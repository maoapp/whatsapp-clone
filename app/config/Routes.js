import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Header from '../components/Header';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Contacts from '../screens/Contacts';
import ChatDetail from '../screens/ChatDetail';
import CallView from '../screens/CallView';
import VideoCallView from '../screens/VideoCallView';
import UserDetail from '../screens/UserDetail';
import ImagePerfilDetail from '../screens/ImagePerfilDetail';

const TabRoutes = {
  Home,
  Chat,
  Contacts
}

const TabNavigator = createMaterialTopTabNavigator(
    TabRoutes,
    {
      tabBarOptions: {
        activeTintColor: 'lightblue',  // Color of tab when pressed
        inactiveTintColor: 'lightgray', // Color of tab when not pressed
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: 'black'
        },
        indicatorStyle: {
            backgroundColor: 'lightblue',
        },
        style: {
          backgroundColor: 'white',
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
          borderBottomWidth:0,
          borderTopWidth:0,
          elevation: 0
        }
      },
    }
  );

const Routes = {
  Home: {
    screen: TabNavigator,
    navigationOptions: { header: Header }
  },
  ChatDetail: {
    screen: ChatDetail,
    navigationOptions: { header: null }
  },
  CallView: {
    screen: CallView,
    navigationOptions: { header: null }
  },
  VideoCallView: {
    screen: VideoCallView,
    navigationOptions: { header: null }
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: { header: null }
  },
  ImagePerfilDetail: {
    screen: ImagePerfilDetail,
    navigationOptions: { header: null }
  }
}

export default Routes;
