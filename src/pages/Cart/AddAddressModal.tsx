import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LocationIcom from '~/assets/location_new.svg';
import CloseIcon from '~/assets/close.svg';
import Button from '~/components/Button/Button';

const AddAddressModal = ({isModalVisible, setIsModalVisible}: any) => {
  const [house, setHouse] = useState('');
  const [area, setArea] = useState('');
  const [directions, setDirections] = useState('');
  const [selectedAddressType, setSelectedAddressType] = useState(''); // for tracking selected chip

  const closeModal = () => setIsModalVisible(false);

  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={closeModal}
      style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 999,
            marginTop: -40,
            right: 10,
            backgroundColor: '#FFF',
            borderRadius: 50,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={closeModal}>
          <CloseIcon width={16} height={16} />
        </TouchableOpacity>
        <View style={styles.locationHeader}>
          <LocationIcom width={30} height={30} />
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationTitle}>Mahanadi Vihar</Text>
            <Text style={styles.locationSubtitle}>
              Mahanadi Vihar, Cuttack, Odisha 753004, India
            </Text>
          </View>
        </View>

        <TextInput
          style={styles.inputField}
          placeholder="House / Flat / Block No."
          value={house}
          onChangeText={setHouse}
          placeholderTextColor={'black'}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Apartment / Road / Area (Optional)"
          value={area}
          onChangeText={setArea}
          placeholderTextColor={'black'}
        />

        {/* Save As Options */}
        <View style={styles.saveAsContainer}>
          <Text style={styles.saveAsTitle}>Save As</Text>
          <View style={styles.saveOptionsRow}>
            <TouchableOpacity
              style={[
                styles.saveOption,
                selectedAddressType === 'Home' && styles.selectedOption,
              ]}
              onPress={() => setSelectedAddressType('Home')}>
              <Image
                source={require('~/assets/home_blue.png')}
                style={{width: 30, height: 30}}
              />
              <Text
                style={[
                  styles.addressTitle,
                  selectedAddressType === 'Home' && styles.selectedText,
                ]}>
                Home
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.saveOption,
                selectedAddressType === 'Work' && styles.selectedOption,
              ]}
              onPress={() => setSelectedAddressType('Work')}>
              <Image
                source={require('~/assets/work.png')}
                style={{width: 30, height: 30}}
              />
              <Text
                style={[
                  styles.addressTitle,
                  selectedAddressType === 'Work' && styles.selectedText,
                ]}>
                Work
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Submit Button */}
        <Button title="Add Address" width={'100%'} onPress={closeModal} />
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  selectedOption: {
    borderColor: '#0A9AB2',
    backgroundColor: '#EDFCFF',
  },
  selectedText: {
    color: '#0A9AB2',
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationTextContainer: {
    marginLeft: 10,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  locationSubtitle: {
    fontSize: 14,
    color: 'grey',
  },
  infoBox: {
    backgroundColor: '#FFF4E5',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  infoText: {
    color: '#FF5722',
    fontSize: 14,
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  voiceInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  voiceInputLabel: {
    fontSize: 14,
    color: '#FF5722',
  },
  voiceRecordButton: {
    backgroundColor: '#FFF4E5',
    borderRadius: 50,
    padding: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 100,
    marginBottom: 5,
    textAlignVertical: 'top',
  },
  charCount: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: 'grey',
  },
  saveAsContainer: {
    marginBottom: 20,
  },
  saveAsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  saveOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    gap: 20,
  },
  saveOption: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    gap: 6,
    backgroundColor: '#FFF',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
  },
  submitButton: {
    backgroundColor: '#FF5722',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddAddressModal;
