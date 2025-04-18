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

const QuestGame = () => {
  const navigation = useNavigation();
  const {coinsQuantity} = useStore();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginHorizontal: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.image}
            source={require('../../assets/images/board.png')}
          />
          <Text style={styles.text}> Joker's Escape Quest</Text>
        </View>
        <CloseButton />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
        <Text style={styles.levelText}>Level 1</Text>

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
          <Text style={styles.coinsQuantityText}>2/3</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center'}}>
          <Image source={require('../../assets/images/questBg.png')} />

          <Image
            source={require('../../assets/images/questJoker.png')}
            style={{position: 'absolute', left: -60, top: -90}}
          />
        </View>
      </View>
      <View style={{marginTop: 30, marginHorizontal: 77}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{height: 80, marginBottom: 12}}
          onPress={() => navigation.navigate('EscapeGame')}>
          <Image
            source={require('../../assets/images/largeBtn.png')}
            style={{width: '100%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{height: 80, marginBottom: 12}}
          onPress={() => navigation.navigate('QuestShop')}>
          <Image
            source={require('../../assets/images/shopBtn.png')}
            style={{width: '100%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{height: 80}}
          onPress={() => navigation.navigate('Levels')}>
          <Image
            source={require('../../assets/images/levelsBtn.png')}
            style={{width: '100%'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#920000',
  },

  text: {
    position: 'absolute',
    fontFamily: 'Grenze-ExtraBoldItalic',
    fontSize: 18,
    color: '#FFFFFF',
    top: 35,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
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
  levelText: {
    fontFamily: 'Grenze-ExtraBoldItalic',
    fontSize: 18,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
  },
});

export default QuestGame;
