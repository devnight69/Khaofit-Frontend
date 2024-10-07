import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CloseIcon from '~/assets/close.svg';
import Add from '~/assets/add.svg';

const ViewAddressesModal = ({
  isModalVisible,
  setIsModalVisible,
  showAddAddressModal,
  setAddShowAddressModal,
}: any) => {
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

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Choose a delivery address</Text>
        </View>

        {/* Address List */}
        <TouchableOpacity onPress={closeModal} style={styles.addressItem}>
          <View style={styles.addressRow}>
            <Image
              source={require('~/assets/home_blue.png')}
              style={{width: 30, height: 30}}
            />
            <View style={styles.addressTextContainer}>
              <Text style={styles.addressTitle}>Home</Text>
              <Text style={styles.addressSubtitle} numberOfLines={1}>
                Uttap Swain Building, Shree Ram Lane, Near Rameswar Temple,
                Chauliaganj
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={closeModal} style={styles.addressItem}>
          <View style={styles.addressRow}>
            <Image
              source={require('~/assets/work.png')}
              style={{width: 30, height: 30}}
            />
            <View style={styles.addressTextContainer}>
              <Text style={styles.addressTitle}>Work</Text>
              <Text style={styles.addressSubtitle} numberOfLines={1}>
                Ambula Technologies, IIT Bhubaneswar Research, Bhubanwsawr,
                Odisha,
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Add New Address */}
        <TouchableOpacity
          onPress={() => setAddShowAddressModal(true)}
          style={styles.addNewAddressContainer}>
          <View style={styles.addAddressRow}>
            <Add width={20} height={20} />
            <Text style={styles.addNewAddressText}>Add new Address</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  addressItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressTextContainer: {
    marginHorizontal: 10,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  addressSubtitle: {
    fontSize: 14,
    color: 'grey',
    width: '65%',
  },
  addNewAddressContainer: {
    paddingVertical: 15,
    marginTop: 20,
  },
  addAddressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNewAddressText: {
    fontSize: 16,
    color: '#0A9AB2',
    marginLeft: 10,
    fontWeight: '500',
  },
});

export default ViewAddressesModal;
