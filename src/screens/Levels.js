import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import MainTitle from '../components/MainTitle';
import GoBackBtn from '../components/GoBackBtn';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import {useStore} from '../store/context';

const Levels = () => {
  const {lockedLevels} = useStore();

  console.log('lockedLevels', lockedLevels);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/shopBg.png')}>
      <View style={styles.headerWrap}>
        <GoBackBtn />
        <MainTitle title={'Levels'} />
      </View>
      <View
        style={{
          marginHorizontal: 30,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 40,
        }}>
        {lockedLevels.map((level, idx) => (
          <View key={idx}>
            <LinearGradient
              colors={
                level.locked ? ['#414141', '#A7A7A7'] : ['#EBAA01', '#FFDE87']
              }
              style={{
                width: 90,
                height: 90,
                borderRadius: 99,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {level.locked ? (
                <Image source={require('../../assets/images/lock.png')} />
              ) : (
                <Image source={require('../../assets/images/key.png')} />
              )}
            </LinearGradient>
            <View style={styles.levelTitleContainer}>
              <Text style={styles.levelTitle}>{level.title}</Text>
            </View>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  levelTitleContainer: {
    width: '100%',
    height: 30,
    borderRadius: 18,
    backgroundColor: '#9E1838',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -18,
  },
  levelTitle: {
    fontFamily: 'Grenze-ExtraBoldItalic',
    fontSize: 17,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 4, height: 1},
    textShadowRadius: 1,
  },
});

export default Levels;
