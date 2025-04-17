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

import GoBackBtn from '../components/GoBackBtn';
import {useState} from 'react';

const Shop = () => {
  const navigation = useNavigation();
  const [currentCubIdx, setCurrentCubIdx] = useState(0);

  const shop = [
    {
      image: require('../../assets/images/cub100.png'),
      price: '100',
    },
    {
      image: require('../../assets/images/cub500.png'),
      price: '500',
    },
    {
      image: require('../../assets/images/cub600.png'),
      price: '600',
    },
    {
      image: require('../../assets/images/cub750.png'),
      price: '750',
    },
  ];

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/shopBg.png')}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginHorizontal: 20,
        }}>
        <GoBackBtn />
        <MainTitle title={'Home'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../assets/images/buttonSmall.png')} />
          <View
            style={{
              backgroundColor: '#9E1838',
              width: 50,
              height: 21,
              position: 'absolute',
            }}>
            <Text style={{textAlign: 'center'}}>0</Text>
          </View>
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
        </View>
      </View>

      <View style={{marginHorizontal: 33}}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#FFE28C',
            borderRadius: 24,
            padding: 20,
            marginTop: 60,
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#3A0000',
              borderRadius: 24,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 100,
              paddingBottom: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 15,
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  if (currentCubIdx <= 0) {
                    return;
                  } else {
                    setCurrentCubIdx(currentCubIdx - 1);
                  }
                }}>
                <Image source={require('../../assets/images/goBack.png')} />
              </TouchableOpacity>
              {/* <View>
                <Image source={require('../../assets/images/cub100.png')} />
              </View> */}

              <Image source={shop[currentCubIdx].image} />

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  if (currentCubIdx === shop.length - 1) {
                    return;
                  } else {
                    setCurrentCubIdx(currentCubIdx + 1);
                  }
                }}>
                <Image source={require('../../assets/images/nextBtn.png')} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 112,
                height: 46,
                backgroundColor: '#9E1838',
                borderRadius: 26,
                marginTop: 27,
                marginLeft: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: '900', fontSize: 25, color: '#fff'}}>
                  {shop[currentCubIdx].price}
                </Text>
                <Image source={require('../../assets/images/star.png')} />
              </View>
            </View>

            <Image
              source={require('../../assets/images/shopBtnBuy.png')}
              style={{position: 'absolute', bottom: -60}}
            />
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

export default Shop;
