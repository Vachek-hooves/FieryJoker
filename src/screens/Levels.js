import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import MainTitle from '../components/MainTitle';
import GoBackBtn from '../components/GoBackBtn';
import LinearGradient from 'react-native-linear-gradient';

const Levels = () => {
  const levels = [
    {
      title: 'Level 1',
      locked: false,
    },
    {
      title: 'Level 2',
      locked: true,
    },
    {
      title: 'Level 3',
      locked: true,
    },
    {
      title: 'Level 4',
      locked: false,
    },
    {
      title: 'Level 5',
      locked: true,
    },
    {
      title: 'Level 6',
      locked: true,
    },
    {
      title: 'Level 7',
      locked: true,
    },
    {
      title: 'Level 8',
      locked: true,
    },
    {
      title: 'Level 9',
      locked: true,
    },
    {
      title: 'Level 10',
      locked: true,
    },
    {
      title: 'Level 11',
      locked: true,
    },
    {
      title: 'Level 12',
      locked: true,
    },
    {
      title: 'Level 13',
      locked: true,
    },
    {
      title: 'Level 14',
      locked: true,
    },
    {
      title: 'Level 15',
      locked: true,
    },
  ];

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
        {levels.map((level, idx) => (
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
