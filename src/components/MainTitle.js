import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MainTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../src/assets/images/board.png')}></Image>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  image: {
    height: 118,
    width: 210,
    // resizeMode: 'contain',
  },
  text: {
    position: 'absolute',
    fontWeight: '800',
    fontFamily: 'Grenze-Italic',
    fontSize: 40,
    color: '#FFFFFF',
    top: 25,
  },
});

export default MainTitle;
