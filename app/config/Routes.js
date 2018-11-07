import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Header from '../components/Header';
import Chat from '../screens/HomeScreen';
import Call from '../screens/ChatScreen';
import Status from '../screens/ContactsScreen';
import ChatDetail from '../screens/ChatDetailScreen';
import CallView from '../screens/CallViewScreen';
import VideoCallView from '../screens/VideoCallScreen';
import UserDetail from '../screens/UserDetailScreen';
import ImagePerfilDetail from '../screens/ImagePerfilDetailScreen';

const TabRoutes = {
  Chat,
  Call,
  Status
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
          color: 'white'
        },
        indicatorStyle: {
            backgroundColor: 'white',
        },
        style: {
          backgroundColor: '#285c54',
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
