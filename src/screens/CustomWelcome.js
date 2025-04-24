import {ImageBackground, ActivityIndicator} from 'react-native';
import React from 'react';
import {useEffect} from 'react';

const CustomWelcome = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.onWelcomeComplete) {
        props.onWelcomeComplete();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [props.onWelcomeComplete]);
  return (
    <ImageBackground
      style={{width: '100%', height: '100%', justifyContent: 'center'}}
      //   source={require('../assets/img/bg/loader.png')}
      source={require('../../assets/bg/loader.png')}>
      <ActivityIndicator color="gold" size="large" />
    </ImageBackground>
  );
};

export default CustomWelcome;
