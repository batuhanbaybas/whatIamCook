import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    paddingBottom: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    height: Dimensions.get('screen').height / 2,
  },
  ingredient_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    alignItems: 'center',
  },
  ingredient_title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 25,
  },
  ingredient: {
    fontSize: 20,
    borderBottomWidth: 1,
  },
  description_title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    paddingTop: 15,
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    height: 50,
    marginVertical: 20,
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
    textAlign: 'center',
  },
});
