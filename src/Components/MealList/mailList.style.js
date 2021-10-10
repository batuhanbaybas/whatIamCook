import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  image: {
    height: Dimensions.get('screen').height / 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});
