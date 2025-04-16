import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainTitle from '../components/MainTitle';
import CloseButton from '../components/CloseButton';

const StartGame = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../src/assets/images/startGameBg.png')}>
      <MainTitle title={'Home'} />

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/images/mediumBtn.png')} />

          <View
            style={{
              backgroundColor: '#9E1838',
              width: 60,
              height: 25,
              position: 'absolute',
            }}>
            <Text style={{textAlign: 'center'}}>0</Text>
          </View>
          <Image
            source={require('../assets/images/starIcon.png')}
            style={{position: 'absolute', left: 90, top: -10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
          }}>
          <Image source={require('../assets/images/mediumBtn.png')} />
          <View
            style={{
              backgroundColor: '#9E1838',
              width: 60,
              height: 25,
              position: 'absolute',
            }}>
            <Text style={{textAlign: 'center'}}>2/2</Text>
          </View>
          <Image
            source={require('../assets/images/heartIcon.png')}
            style={{position: 'absolute', left: 90, top: -10}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 20}}>
        <View
          style={{
            backgroundColor: '#3A0000',
            borderRadius: 12,
            padding: 10,
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 60,
          }}>
          <Image source={require('../assets/images/slice.png')} />
          <View
            style={{
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{fontFamily: 'Grenze-Italic', color: '#fff'}}>
              SAPPER
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SapperGame')}>
              <Image source={require('../assets/images/playBtn.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#3A0000',
            borderRadius: 12,
            padding: 10,
            flexDirection: 'row',
          }}>
          <Image source={require('../assets/images/slice.png')} />
          <View
            style={{
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{fontFamily: 'Grenze-Italic', color: '#fff'}}>
              SAPPER
            </Text>
            <TouchableOpacity>
              <Image source={require('../assets/images/playBtn.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default StartGame;
