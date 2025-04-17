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
import {useStore} from '../store/context';

const Home = () => {
  const navigation = useNavigation();
  const {coinsQuantity} = useStore();

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../src/assets/images/back.png')}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginHorizontal: 20,
        }}>
        <MainTitle title={'Home'} />
        <CloseButton />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/images/buttonSmall.png')} />
          <View style={styles.btnWrap}></View>
          <Image
            source={require('../assets/images/starIcon.png')}
            style={{
              position: 'absolute',
              left: 65,
              bottom: 2,
              width: 46,
              height: 46,
            }}
          />
          <Text style={styles.coinsQuantityText}>{coinsQuantity}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/images/buttonSmall.png')} />
          <View style={styles.btnWrap}></View>
          <Image
            source={require('../assets/images/heartIcon.png')}
            style={{
              position: 'absolute',
              left: 65,
              bottom: 2,
              width: 46,
              height: 46,
            }}
          />
          <Text style={styles.coinsQuantityText}>2/3</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center'}}>
          <Image source={require('../assets/images/boardBg.png')} />
          <Image
            source={require('../assets/images/gift.png')}
            style={{position: 'absolute', bottom: -2}}
          />
          <Image
            source={require('../assets/images/joker.png')}
            style={{position: 'absolute', left: -30, top: -60}}
          />
        </View>
      </View>
      <View style={{marginTop: 30, marginHorizontal: 77}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{height: 80, marginBottom: 12}}
          onPress={() => navigation.navigate('StartGame')}>
          <Image
            source={require('../assets/images/largeBtn.png')}
            style={{width: '100%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{height: 80, marginBottom: 12}}
          onPress={() => navigation.navigate('Shop')}>
          <Image
            source={require('../assets/images/shopBtn.png')}
            style={{width: '100%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{height: 80}}>
          <Image
            source={require('../assets/images/levelsBtn.png')}
            style={{width: '100%'}}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
  btnWrap: {
    backgroundColor: '#9E1838',
    width: 50,
    height: 20,
    position: 'absolute',
    alignItems: 'center',
  },
});

export default Home;
