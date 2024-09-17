import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

const AddAddressModal = ({isModalVisible, setIsModalVisible}: any) => {
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [type, setType] = useState('');

  const handleAddAddress = () => {
    if (address && landmark && type) {
      // Handle the address submission logic
      setIsModalVisible(false);
    } else {
      //   alert('Please fill in all required fields');
    }
  };

  const RadioButtonGroup = ({selectedType, onTypeChange}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        {['Home', 'Work', 'Other'].map(item => (
          <TouchableOpacity
            key={item}
            style={{
              flex: 1,
              padding: 10,
              borderWidth: 1,
              borderColor: selectedType === item ? '#000' : '#ddd',
              backgroundColor: selectedType === item ? '#ddd' : 'transparent',
              alignItems: 'center',
              borderRadius: 5,
              marginHorizontal: 5,
            }}
            onPress={() => onTypeChange(item)}>
            <Text style={{color: 'black'}}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setIsModalVisible(false)}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {/* Close button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalVisible(false)}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>

          <Text style={styles.header}>Add New Address</Text>

          <Text style={styles.subHeader}>Your Location</Text>
          <Text style={styles.location}>
            Powai, Powai, Mumbai, Maharashtra, India
          </Text>

          <TextInput
            style={[styles.input, !address && styles.requiredInput]}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          {!address && <Text style={styles.requiredText}>Required</Text>}

          <TextInput
            style={[styles.input, !landmark && styles.requiredInput]}
            placeholder="Landmark"
            value={landmark}
            onChangeText={setLandmark}
          />
          {!landmark && <Text style={styles.requiredText}>Required</Text>}

          <Text style={styles.subHeader}>Type</Text>
          <RadioButtonGroup selectedType={type} onTypeChange={setType} />
          {!type && <Text style={styles.requiredText}>Required</Text>}

          <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
            <Text style={styles.addButtonText}>ENTER ADDRESS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeText: {
    fontSize: 18,
    color: 'black',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  subHeader: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    color: 'black',
  },
  location: {
    color: 'black',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: 'black',
  },
  requiredInput: {
    borderColor: 'red',
    color: 'black',
  },
  requiredText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#F7C5B2',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddAddressModal;
