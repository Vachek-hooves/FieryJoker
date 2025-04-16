import {useState} from 'react';
import {Modal, View} from 'react-native';

const CustomModal = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);

  return (
    <Modal transparent visible={showModal} statusBarTranslucent={true}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: '#000000',
            paddingHorizontal: 30,
            paddingVertical: 28,
            borderRadius: 24,
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
