import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation}) => (
    <View>
        <View style={styles.mainHeader}>
          <Text style={styles.title}>Whatssapp</Text>
          <View style={styles.iconSections}>
            <Icon name="search" color='#fff' size={23} style={{padding:5}} />
             <Icon name="call" color='#fff' size={23} style={{padding:5}} />
            <Icon name="more-vert" color='#fff' size={23} style={{padding:5}}/>
          </View>
        </View>
    </View>
    
);

const styles = StyleSheet.create({
    mainHeader: {
      backgroundColor: '#285c54',
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center'
    },
    title: {
      color: 'white',
      fontSize: 16,
      flex: 2,
      fontWeight: 'bold'
    },
    iconSections: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    header: {
      backgroundColor: '#285c54',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 30,
      paddingLeft: 40
    },
    textMenu: {
      fontSize: 14,
      color: '#eaedee'
    },
    activeTab: {
      color: 'white',
      fontWeight: 'bold'
    }
});
  
export default Header;
