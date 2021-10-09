import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
