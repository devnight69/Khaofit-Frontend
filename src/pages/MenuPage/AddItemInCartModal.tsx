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

const AddItemInCartModal = ({visible, onClose}: any) => {
  const [mealAddon, setMealAddon] = useState({
    cutlery: false,
    onionSalad: false,
    fryums: false,
  });

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
        <View style={styles.header}>
          <Text style={styles.title}>Kadai Paneer Meal Dabba</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle}>
          Kadai Paneer [150ml] + Phulka [3] of your choice
        </Text>
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
        <Text style={styles.footerText}>
          Select any 1 option from "Dal Choice (choose any 1)"
        </Text>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
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
    height: '68%',
    alignItems: 'flex-start',
    padding: 20,
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
    color: 'red',
    // marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default AddItemInCartModal;
