import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const CloseButton = () => {
  return (
    <TouchableOpacity style={styles.closeBtnContainer}>
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
