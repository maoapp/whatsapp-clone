import { StyleSheet, Dimensions } from 'react-native';

import { PRIMARY_COLOR } from '../../constants/constants';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    flexDirection: 'row',
    width
  },
  iconContainer: {
    justifyContent: 'center'
  },
  userPicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  },
  infoContainer: {
    justifyContent: 'center'
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  status: {
    fontSize: 14,
    color: 'white'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  },
  icon: {
    paddingLeft: 30,
  }
});

export default styles;
