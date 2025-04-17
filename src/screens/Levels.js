import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import MainTitle from '../components/MainTitle';
import GoBackBtn from '../components/GoBackBtn';
import LinearGradient from 'react-native-linear-gradient';

const Levels = () => {
  const levels = [
    {title: 'Level 1', image: require('../../assets/images/key.png')},
    {title: 'Level 2', image: require('../../assets/images/lock.png')},
    {title: 'Level 3', image: require('../../assets/images/lock.png')},
    {title: 'Level 4', image: require('../../assets/images/lock.png')},
    {title: 'Level 5', image: require('../../assets/images/lock.png')},
    {title: 'Level 6', image: require('../../assets/images/lock.png')},
    {title: 'Level 7', image: require('../../assets/images/lock.png')},
    {title: 'Level 8', image: require('../../assets/images/lock.png')},
    {title: 'Level 9', image: require('../../assets/images/lock.png')},
    {title: 'Level 10', image: require('../../assets/images/lock.png')},
    {title: 'Level 11', image: require('../../assets/images/lock.png')},
    {title: 'Level 12', image: require('../../assets/images/lock.png')},
    {title: 'Level 13', image: require('../../assets/images/lock.png')},
    {title: 'Level 14', image: require('../../assets/images/lock.png')},
    {title: 'Level 15', image: require('../../assets/images/lock.png')},
  ];

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/shopBg.png')}>
      <View style={styles.headerWrap}>
        <GoBackBtn />
        <MainTitle title={'Levels'} />
      </View>

      {levels.map((level, idx) => (
        <View>
          <View
            style={{
              width: 90,
              height: 90,
              backgroundColor: '#EBAA01',
              borderRadius: 99,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={level.image} />
          </View>
          <LinearGradient
            colors={['#F2EA5C', '#E9A90C']}
            style={{
              height: 120,
              width: 358,
              borderRadius: 24,
              marginBottom: 24,
            }}></LinearGradient>
        </View>
      ))}
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
});

export default Levels;
