import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Button from '~/components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'RootStackParams';
import CloseIcon from '~/assets/close.svg';

const ProductModal = ({isModalVisible, setModalVisible}: any) => {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modalStyle}>
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
            onPress={toggleModal}>
            <CloseIcon width={16} height={16} />
          </TouchableOpacity>
          <Image
            source={require('~/assets/burger.png')}
            style={styles.productImage}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
            }}>
            <View
              style={{
                borderWidth: 2,
                borderColor: 'green',
                width: 16,
                height: 16,
                borderRadius: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 50,
                  height: 6,
                  width: 6,
                  // padding: 10,
                }}></View>
            </View>
            <Text style={styles.productTitle}>Spring Onion Paratha [1 Pc]</Text>
          </View>
          <Text style={styles.productPrice}>₹25</Text>
          <Text style={styles.productDescription}>
            Spring onion paratha is a simple & flavorful Indian flatbread made
            with spring onions (scallions), gram flour, whole wheat flour,
            herbs, and spices. No Jain Food option available with this Item.
          </Text>

          <Button
            title="Add"
            width={'100%'}
            onPress={() => navigation.navigate('Cart')}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'flex-start',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productDescription: {
    textAlign: 'justify',
    marginVertical: 10,
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  addText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProductModal;
