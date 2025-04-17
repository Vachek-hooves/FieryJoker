import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainTitle from '../components/MainTitle';
import CloseButton from '../components/CloseButton';

import Board from '../components/Board';

const SapperGame = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../src/assets/images/back.png')}>
      <View style={styles.titleContainer}>
        <MainTitle title={'Sapper'} />
        <CloseButton />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/images/buttonSmall.png')} />
          <View style={styles.wrap}>
            <Text style={{textAlign: 'center'}}>0</Text>
          </View>
          <Image
            source={require('../assets/images/starIcon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/images/buttonSmall.png')} />
          <View style={styles.wrap}>
            <Text style={{textAlign: 'center'}}>2/2</Text>
          </View>
          <Image
            source={require('../assets/images/heartIcon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <Board />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  wrap: {
    backgroundColor: '#9E1838',
    width: 50,
    height: 21,
    position: 'absolute',
  },
  image: {
    position: 'absolute',
    left: 65,
    bottom: 2,
    width: 46,
    height: 46,
  },
});

export default SapperGame;
