import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainTitle from '../components/MainTitle';
import {useStore} from '../store/context';

const Home = () => {
  const navigation = useNavigation();
  const {coinsQuantity, health} = useStore();

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/back.png')}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          <MainTitle title={'Home'} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../assets/images/buttonSmall.png')} />
            <View style={styles.btnWrap}></View>
            <Image
              source={require('../../assets/images/starIcon.png')}
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
            <Image source={require('../../assets/images/buttonSmall.png')} />
            <View style={styles.btnWrap}></View>
            <Image
              source={require('../../assets/images/heartIcon.png')}
              style={{
                position: 'absolute',
                left: 65,
                bottom: 2,
                width: 46,
                height: 46,
              }}
            />
            <Text style={styles.coinsQuantityText}>{health}/3</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <Image source={require('../../assets/images/boardBg.png')} />
            <Image
              source={require('../../assets/images/gift.png')}
              style={{position: 'absolute', bottom: -2}}
            />
            <Image
              source={require('../../assets/images/joker.png')}
              style={{
                position: 'absolute',
                left: -30,
                top: -60,
              }}
            />
          </View>
        </View>
        <View
          style={{marginTop: 30, marginHorizontal: 77, alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{height: 80, marginBottom: 12}}
            onPress={() => navigation.navigate('StartGame')}>
            <Image
              source={require('../../assets/images/largeBtn.png')}
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{height: 80, marginBottom: 12}}
            onPress={() => navigation.navigate('Shop')}>
            <Image source={require('../../assets/images/shopBtn.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{height: 80, marginBottom: 30}}
            onPress={() => navigation.navigate('Levels')}>
            <Image
              source={require('../../assets/images/levelsBtn.png')}
              style={{}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  closeBtnContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#FF0000',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderColor: '#fff',
    marginLeft: '8%',
  },
});

export default Home;
