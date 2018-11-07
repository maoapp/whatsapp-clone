import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

const users = [
  {
    id: 0,
    name: 'Bale',
    picture: require("../assets/baleProfile.jpeg"),
    date: '22-Mar-2016 5:46 PM',
    call: true
  },
  {
    id: 1,
    name: 'Ronaldo',
    picture: require("../assets/ronaldoProfile.jpg"),
    date: '22-Mar-2016 5:46 PM',
    call: false
  },
  {
    id: 2,
    name: 'Isco',
    picture: require("../assets/IscoProfile.jpg"),
    date: '22-Mar-2016 5:46 PM',
    call: true
  },
  {
    id: 3,
    name: 'Asensio',
    picture: require("../assets/asensioProfile.jpg"),
    date: '22-Mar-2016 5:46 PM',
    call: true
  },
  {
    id: 4,
    name: 'Kross',
    picture: require("../assets/krossProfile.jpeg"),
    date: '22-Mar-2016 5:46 PM',
    call: false
  },
  {
    id: 5,
    name: 'Marcelo',
    picture: require("../assets/marcelo.jpg"),
    date: '22-Mar-2016 5:46 PM',
    call: true
  },
  {
    id: 6,
    name: 'Ramos',
    picture: require("../assets/ramos.jpg"),
    date: '22-Mar-2016 5:46 PM',
    call: false
  }
]

class Home extends Component{
  constructor() {
    super();

    this.state = {
      isModalVisible: false, 
      userActive: {}
    }

    this.showModal = this.showModal.bind(this);
    this.buildModal = this.buildModal.bind(this);
  }

  renderItem = (item, index) => (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.showModal(item)}>
          <Image style={styles.image} source={item.picture}/>
        </TouchableOpacity>
        <View style={styles.data}>
          <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('ChatDetail', {userActive: item})}>
            <Text style={styles.dataName}>{item.name}</Text>
            <View style={styles.date}>
              {item.call ? <Icon name="call-missed" size={15} color="red"/> : <Icon name="call-received" size={15} color="#285c54"/>}
              <Text style={styles.dataDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.callIcon}>
            <Icon name="call" size={25} color="#285c54"/>
          </View>
        </View>
      </View>
  )

  buildModal() {
    const { userActive, isModalVisible } = this.state;

    return (
      <Modal 
          isVisible={isModalVisible} 
          onBackdropPress={() => this.setState({isModalVisible: false})}
        >
          <View style={styles.containerModal}>
            <TouchableOpacity onPress={()=> this.goToScreen('ImagePerfilDetail', userActive)}>
              <Image style={styles.modalImage} source={userActive.picture}/>
            </TouchableOpacity>
            <View style={styles.containerOverlay}>
              <View style={styles.containerOverlayEmpty}></View>
              <Text style={styles.userActiveText}>{userActive.name}</Text>
            </View>
            <View style={styles.containerIconsModal}>
              <TouchableOpacity onPress={() => this.goToScreen('ChatDetail', userActive)}>
                <Icon name="message" size={25} color="#285c54"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.goToScreen('CallView')}>
                <Icon name="call" size={25} color="#285c54"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.goToScreen('VideoCallView')}>
                <Icon name="videocam" size={25} color="#285c54"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.goToScreen('UserDetail')}>
                <Icon name="videocam" size={25} color="#285c54"/>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    )
  }

  goToScreen(screen, param) {
    const { navigation } = this.props;

    this.setState({
      isModalVisible: false
    })
    navigation.navigate(screen, {userActive: param});
  }

  showModal(userActive) {
    this.setState(
      { 
        isModalVisible: true,
        userActive
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.buildModal()}
        <View style={styles.body}>
          <ScrollView>
            <FlatList 
              data={users}
              renderItem={({item}) => this.renderItem(item, item.key)}
              keyExtractor={(item, index) => index.toString()}
              removeClippedSubviews={true}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
  },
  containerModal: {
    flex: 1,
    position: 'absolute',
    top: 95,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  containerIconsModal: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    padding: 20
  },
  modalImage: {
    width: 300,
    height: 300
  },
  containerOverlay: {
    position: 'absolute',
    alignSelf: 'flex-start',
    left: 35,
    padding: 10
  },
  containerOverlayEmpty: {
    backgroundColor: 'black',
    opacity: 0.5,
    width: 300,
    height: 40,
    position: 'absolute',
    left: 0
  },
  userActiveText: {
    fontSize: 18,
    color: 'white'
  }
});

export default Home;
