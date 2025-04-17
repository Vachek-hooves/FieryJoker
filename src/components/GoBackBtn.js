import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, View} from 'react-native';

const GoBackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{marginRight: 10}}
      onPress={() => navigation.goBack()}>
      <Image source={require('../../assets/images/goBack.png')} />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
