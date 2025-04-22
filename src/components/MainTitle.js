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
        source={require('../../assets/images/board.png')}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 40},
  image: {
    height: 118,
    width: 190,
  },
  text: {
    position: 'absolute',
    fontFamily: 'Grenze-ExtraBoldItalic',
    fontSize: 40,
    color: '#FFFFFF',
    top: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
  },
});

export default MainTitle;
