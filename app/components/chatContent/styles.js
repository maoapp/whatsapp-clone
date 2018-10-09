import { StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  bodyBackground: {
    width,
    height,
    flex: 1
  },
  inputContainer: {
    backgroundColor: 'white',
    width,
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    height: 100
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  voiceContainer: {
    backgroundColor: '#3b877b',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
