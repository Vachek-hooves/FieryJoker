import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const CloseButton = ({navigateTo}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.closeBtnContainer}
      onPress={() => navigation.navigate(navigateTo)}>
      <Image source={require('../assets/images/close.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeBtnContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#FF0000',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderColor: '#fff',
    marginLeft: 20,
  },
});

export default CloseButton;
