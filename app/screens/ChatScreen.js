import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';

import Header from '../components/Header';

const messages = [
    {
      name: 'Bale',
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qWcyxNamM2bRRdwx2K7EvokOkE4ZK9pwDYZXL7GpguX-_0UJYA",
      date: '22-Mar-2016 5:46 PM',
      lastMessage: 'hey bro whats up?'
    },
    {
      name: 'Ronaldo',
      picture: "https://givemesport.azureedge.net/images/18/07/06/81c3712cf93d2f03ea48962eeea1113a/960.jpg",
      date: '22-Mar-2016 5:46 PM',
      lastMessage: 'where is the party today?'
    },
    {
      name: 'Isco',
      picture: "https://cdn.images.express.co.uk/img/dynamic/67/590x/Isco-920933.jpg",
      date: '22-Mar-2016 5:46 PM',
      lastMessage: 'Do you see my last score?'
    },
    {
      name: 'Asensio',
      picture: "https://start.att.net/exclusive/sites/default/files/850x478_Article_Asensio_01.jpg",
      date: '22-Mar-2016 5:46 PM',
      lastMessage: 'I am injured'
    },
    {
      name: 'Kross',
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdNwznsaCxJPHbopW7rEPNZrH_78H_Npb8gzfjmt9S7Xqt6Ic",
      date: '22-Mar-2016 5:46 PM',
      lastMessage: 'I dont like to play in the position or middle center , But lotopegui wants that'
    }
]

const renderItem = (item, index) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: item.picture}}/>
      <View style={styles.data}>
        <View>
          <Text style={styles.dataName}>{item.name}</Text>
          <View style={styles.date}>
            <Text style={styles.dataDate}>{item.lastMessage}</Text>
          </View>
        </View>
        <View style={styles.callIcon}>
            <Text style={styles.dataDate}>{item.date}</Text>
        </View>
      </View>
    </View>
)

const Chat = ({navigation}) => (
    <View>
        <View style={styles.body}>
            <ScrollView>
            <FlatList 
                data={messages}
                renderItem={({item}) => renderItem(item, item.key)}
                keyExtractor={(item, index) => index.toString()}
                removeClippedSubviews={true}
            />
            </ScrollView>
        </View>    
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    item: {
      flexDirection: 'row',
      flex: 1,
      padding: 20,
      paddingRight: 0,
      paddingLeft: 5
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 50,
      marginRight: 10,
    },
    data: {
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    dataName: {
      fontWeight: 'bold',
      fontSize: 16
    },
    dataDate: {
      fontSize: 14,
      color: '#cccece',
      fontWeight: 'bold',
    },
    callIcon: {
      paddingRight: 10
    },
    date: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  });

export default Chat;
