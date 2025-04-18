import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Loader = () => {
  return (
    <View>
      <LinearGradient
        colors={['#8E1410', '#0E0000']}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../../assets/images/loader.png')} />
      </LinearGradient>
    </View>
  );
};

export default Loader;
