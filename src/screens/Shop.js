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

import GoBackBtn from '../components/GoBackBtn';
import {useState} from 'react';
import {useStore} from '../store/context';

const Shop = () => {
  const [currentCubIdx, setCurrentCubIdx] = useState(0);
  const {coinsQuantity, setSelectedCubFromShop} = useStore();

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

  const handleBuyCub = () => {
    if (currentCubIdx === 0 && coinsQuantity >= 100) {
      setSelectedCubFromShop(currentCubIdx + 1);
    } else if (currentCubIdx === 1 && coinsQuantity >= 500) {
      setSelectedCubFromShop(currentCubIdx + 1);
    } else if (currentCubIdx === 2 && coinsQuantity >= 600) {
      setSelectedCubFromShop(currentCubIdx + 1);
    } else if (currentCubIdx === 3 && coinsQuantity >= 750) {
      setSelectedCubFromShop(currentCubIdx + 1);
    }
  };

  const handleNextCub = () => {
    if (currentCubIdx === shop.length - 1) {
      return;
    } else {
      setCurrentCubIdx(currentCubIdx + 1);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/images/shopBg.png')}>
      <ScrollView>
        <View style={styles.headerWrap}>
          <GoBackBtn />
          <MainTitle title={'Shop'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../assets/images/buttonSmall.png')} />
            <View style={styles.btnWrap}></View>
            <Image
              source={require('../../assets/images/starIcon.png')}
              style={styles.starIcon}
            />
            <Text style={styles.coinsQuantityText}>{coinsQuantity}</Text>
          </View>
        </View>

        <View style={{marginHorizontal: 33}}>
          <View style={styles.mainContainer}>
            <View style={styles.nestedContainer}>
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

                <Image source={shop[currentCubIdx].image} />

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleNextCub()}>
                  <Image source={require('../../assets/images/nextBtn.png')} />
                </TouchableOpacity>
              </View>
              <View style={styles.priceContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Grenze-ExtraBold',
                      fontSize: 25,
                      color: '#fff',
                      textShadowColor: 'rgba(0, 0, 0, 0.5)',
                      textShadowOffset: {width: 4, height: 1},
                      textShadowRadius: 1,
                      bottom: 2,
                    }}>
                    {shop[currentCubIdx].price}
                  </Text>
                  <Image source={require('../../assets/images/star.png')} />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => handleBuyCub()}
            activeOpacity={0.7}
            style={{alignItems: 'center', marginLeft: 10, marginBottom: 60}}>
            <Image
              source={require('../../assets/images/shopBtnBuy.png')}
              style={{position: 'absolute', bottom: -40}}
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
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
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
    height: 21,
    position: 'absolute',
  },
  starIcon: {
    position: 'absolute',
    left: 65,
    bottom: 2,
    width: 46,
    height: 46,
  },
  mainContainer: {
    width: '100%',
    backgroundColor: '#FFE28C',
    borderRadius: 24,
    padding: 20,
    marginTop: 60,
  },
  nestedContainer: {
    width: '100%',
    backgroundColor: '#3A0000',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 25,
  },
  priceContainer: {
    width: 120,
    height: 48,
    backgroundColor: '#9E1838',
    borderRadius: 26,
    marginTop: 27,
    marginLeft: 10,
  },
});

export default Shop;
