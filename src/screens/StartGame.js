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

const StartGame = () => {
  const navigation = useNavigation();
  const {coinsQuantity, health} = useStore();

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/startGameBg.png')}>
      <ScrollView>
        <MainTitle title={'Home'} />

        <View style={styles.buttonsContainer}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../assets/images/mediumBtn.png')} />
            <View
              style={{
                backgroundColor: '#9E1838',
                width: 65,
                height: 29,
                position: 'absolute',
              }}></View>
            <Image
              source={require('../../assets/images/starIcon.png')}
              style={{position: 'absolute', left: 90, top: -10}}
            />
            <Text style={styles.coinsQuantityText}>{coinsQuantity}</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}>
            <Image source={require('../../assets/images/mediumBtn.png')} />
            <View
              style={{
                backgroundColor: '#9E1838',
                width: 60,
                height: 29,
                position: 'absolute',
              }}>
              <Text style={styles.livesText}>{health}/3</Text>
            </View>
            <Image
              source={require('../../assets/images/heartIcon.png')}
              style={{position: 'absolute', left: 90, top: -10}}
            />
          </View>
        </View>
        <View style={{marginHorizontal: 20}}>
          <View style={styles.startGameContainer}>
            <Image source={require('../../assets/images/slice.png')} />
            <View
              style={{
                paddingLeft: 10,
                justifyContent: 'space-between',
              }}>
              <Text style={styles.startGameTitle}>Sapper</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('SapperGame')}>
                <Image source={require('../../assets/images/playBtn.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.startGameContainer}>
            <Image source={require('../../assets/images/slice.png')} />
            <View
              style={{
                justifyContent: 'space-between',
                paddingLeft: 10,
              }}>
              <Text style={styles.startGameTitle}>Escape Quest</Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('QuestGame')}>
                <Image source={require('../../assets/images/playBtn.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startGameTitle: {
    fontFamily: 'Grenze-ExtraBoldItalic',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
    fontSize: 40,
  },
  startGameContainer: {
    backgroundColor: '#3A0000',
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  coinsQuantityText: {
    fontFamily: 'Grenze-ExtraBold',
    fontSize: 35,
    color: '#fff',
    position: 'absolute',
    bottom: 11,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 3, height: 0},
    textShadowRadius: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  livesText: {
    fontFamily: 'Grenze-ExtraBold',
    fontSize: 35,
    color: '#fff',
    position: 'absolute',
    bottom: -5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 3, height: 0},
    textShadowRadius: 1,
  },
});

export default StartGame;
