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
import {useStore} from '../store/context';

const SapperGame = () => {
  const navigation = useNavigation();
  const {coinsQuantity} = useStore();

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/back.png')}>
      <View style={styles.titleContainer}>
        <MainTitle title={'Sapper'} />
        <CloseButton navigateTo={'Home'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/images/buttonSmall.png')} />
          <View style={styles.wrap}></View>
          <Image
            source={require('../../assets/images/starIcon.png')}
            style={styles.image}
          />
          <Text style={styles.coinsQuantityText}>{coinsQuantity}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../assets/images/buttonSmall.png')} />
          <View style={styles.wrap}></View>
          <Image
            source={require('../../assets/images/heartIcon.png')}
            style={styles.image}
          />
          <Text style={styles.coinsQuantityText}>2/2</Text>
        </View>
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
  coinsQuantityText: {
    fontFamily: 'Grenze-ExtraBold',
    fontSize: 25,
    color: '#fff',
    position: 'absolute',
    bottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
  },
});

export default SapperGame;
