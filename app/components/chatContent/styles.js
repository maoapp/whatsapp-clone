import { StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  bodyBackground: {
    width,
    height,
    flex: 1
  },
  messageContainerAuthor: {
    padding: 5,
    backgroundColor: '#dffac2',
    borderRadius: 5,
    width: width - width / 4,
    alignSelf: 'flex-end',
    marginRight: 20,
    margin: 5
  },
  messageContainer: {
    padding: 5,
    backgroundColor: 'white',
    marginLeft: 20,
    borderRadius: 5,
    width: width - width / 4,
    margin: 5
  },
  messageTimeContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row'
  },
  messageTime: {
    fontSize: 12,
    color: '#7d8080'
  },
  status: {
    marginLeft: 3
  },
  textInputContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderRadius: 50
  },
  fileAndPhoto: {
    flexDirection: 'row'
  },
  voiceContainer: {
    backgroundColor: '#3b877b',
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10
  }
});

export default styles;
