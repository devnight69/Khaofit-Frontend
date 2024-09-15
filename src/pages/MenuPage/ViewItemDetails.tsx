import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import FoodImage from '../../assets/food.svg';
import Button from '../../components/Button/Button';

function ViewItemDetails({showModal, setShowModal}: any) {
  return (
    <Modal
      isVisible={showModal}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      onBackdropPress={() => setShowModal(false)}
      onBackButtonPress={() => setShowModal(false)}>
      <View style={styles.modalContainer}>
        <FoodImage width={'100%'} height={'56%'} />
        <View style={styles.leftSection}>
          <View
            style={{
              height: 20,
              width: 20,
              borderWidth: 2,
              borderColor: 'green',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderRadius: 50,
                backgroundColor: 'green',
                width: 10,
                height: 10,
              }}></View>
          </View>
          <Text style={styles.mealName}>Kadai Paneer Meal Dabba</Text>
          <Text style={styles.mealDescription}>
            Kadai Paneer [150ml] + Phulka [3] + Dal [300ml] + ... More
          </Text>
          <Text style={styles.mealPrice}>₹209</Text>
          <Button
            title="+ ADD"
            onPress={() => {}}
            width={'100%'}
            borderRadius={10}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  leftSection: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  mealName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  mealDescription: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 5,
  },
  mealPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '60%',
    alignItems: 'flex-start',
  },
});

export default ViewItemDetails;
