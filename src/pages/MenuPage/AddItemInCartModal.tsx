import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import ReactNativeModal from 'react-native-modal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';
import {useNavigation} from '@react-navigation/native';

const AddItemInCartModal = ({visible, onClose}: any) => {
  const [mealAddon, setMealAddon] = useState({
    cutlery: false,
    onionSalad: false,
    fryums: false,
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [rotiAddon, setRotiAddon] = useState(false);
  const [dalChoice, setDalChoice] = useState('');

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '1',
        label: 'Dal Fry',
        value: 'dalFry',
      },
      {
        id: '2',
        label: 'Dal Tadka',
        value: 'dalTadka',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <ReactNativeModal
      isVisible={visible}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.modalContainer}>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <View style={styles.header}>
            <Text style={styles.title}>Kadai Paneer Meal Dabba</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subTitle}>
            Kadai Paneer [150ml] + Phulka [3] of your choice
          </Text>
        </View>
        <ScrollView style={styles.content}>
          {/* Meal Addon Section */}
          <Text style={styles.sectionTitle}>Meal Addon</Text>
          <Text style={styles.sectionSubtitle}>
            Please select upto 3 options
          </Text>
          {/* Add Cutlery Option */}
          <View style={styles.checkboxContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                value={mealAddon.cutlery}
                onValueChange={() =>
                  setMealAddon({...mealAddon, cutlery: !mealAddon.cutlery})
                }
                tintColors={{
                  true: 'black',
                  false: 'black',
                }}
              />
              <Text style={styles.checkboxLabel}>Add Cutlery [1 Pc]</Text>
            </View>
            <Text style={styles.mealPrice}>₹136</Text>
          </View>

          {/* Add Onion Salad Option */}
          <View style={styles.checkboxContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                value={mealAddon.onionSalad}
                onValueChange={() =>
                  setMealAddon({
                    ...mealAddon,
                    onionSalad: !mealAddon.onionSalad,
                  })
                }
                tintColors={{
                  true: 'black',
                  false: 'black',
                }}
              />
              <Text style={styles.checkboxLabel}>Add Onion Salad [1 Pc]</Text>
            </View>
            <Text style={styles.mealPrice}>₹136</Text>
          </View>

          {/* Add Fryums Option */}
          <View style={styles.checkboxContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                value={mealAddon.fryums}
                onValueChange={() =>
                  setMealAddon({...mealAddon, fryums: !mealAddon.fryums})
                }
                tintColors={{
                  true: 'black',
                  false: 'black',
                }}
              />
              <Text style={styles.checkboxLabel}>Add Fryums [1 Pc]</Text>
            </View>
            <Text style={styles.mealPrice}>₹136</Text>
          </View>

          {/* Roti Add-on Section */}
          <Text style={styles.sectionTitle}>Roti Add-on</Text>
          <Text style={styles.sectionSubtitle}>
            Please select upto 1 option
          </Text>
          {/* Ghee Option */}
          <View style={styles.checkboxContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                value={rotiAddon}
                onValueChange={() => setRotiAddon(!rotiAddon)}
                tintColors={{
                  true: 'black',
                  false: 'black',
                }}
              />
              <Text style={styles.checkboxLabel}>Ghee</Text>
            </View>
            <Text style={styles.mealPrice}>₹136</Text>
          </View>

          {/* Dal Choice Section */}
          <Text style={styles.sectionTitle}>Dal Choice (choose any 1)</Text>
          <Text style={styles.sectionSubtitle}>
            Please select any one option
          </Text>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
              labelStyle={{color: 'black'}}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.footerContainer}
          onPress={() => navigation.navigate('Cart')}>
          <View style={styles.footerLeft}>
            <Text style={styles.footerItemCount}>1 Item</Text>
            <Text style={styles.footerPrice}>₹209</Text>
          </View>
          <Text style={styles.footerButton}>VIEW CART →</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space between the price and button
    alignItems: 'center', // Align items vertically in the center
    backgroundColor: '#E65100', // Footer background color
    paddingVertical: 16, // Vertical padding for footer
    paddingHorizontal: 20, // Horizontal padding for footer
    width: '100%',
  },
  footerLeft: {
    flexDirection: 'row', // Align item count and price horizontally
    alignItems: 'center',
  },
  footerItemCount: {
    fontSize: 16,
    color: '#FFF',
    marginRight: 10, // Space between item count and price
  },
  footerPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  footerButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between',
    width: '100%',
  },
  checkboxLabel: {
    fontSize: 16,
    color: 'black',
  },

  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '70%',
    alignItems: 'flex-start',
    // padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {
    fontSize: 20,
    color: '#000',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  content: {
    maxHeight: 500,
    paddingHorizontal: 20,
  },
  mealPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  footerText: {
    textAlign: 'center',
    color: '#FFF',
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontWeight: '500',
    fontSize: 18,
    backgroundColor: '#E65100',
    // height: 50,
    paddingVertical: 16,
  },
});

export default AddItemInCartModal;
