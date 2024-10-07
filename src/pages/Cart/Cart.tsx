import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import AddAddressModal from './AddAddressModal';
import Button from '~/components/Button/Button';
import Typography from '~/components/Typography/Typography';
import ArrowDropDown from '~/assets/dropdown_new.svg';
import ViewAddressesModal from './ViewAddressesModal';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'RootStackParams';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [showSelectSlotModal, setShowSelectSlotModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAddAddressModal, setAddShowAddressModal] = useState(false);
  const [slotSelected, setSlotSelected] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Functions to handle date/time picker
  const onChangeDate = (event: any, date: any) => {
    const selectedDate = date || new Date();
    setSelectedDate(selectedDate);
    setShowDatePicker(false);
  };

  const onChangeTime = (event: any, time: any) => {
    const selectedTime = time || new Date();
    setSelectedTime(selectedTime);
    setShowTimePicker(false);
  };

  const formatTime = (date: any) => {
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  const formatDate = (date: any) => {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header */}
        <TouchableOpacity
          onPress={() => setShowAddressModal(true)}
          style={styles.header}>
          <View
            style={{
              display: 'flex',
              gap: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('~/assets/home_blue.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={styles.headerText} numberOfLines={1}>
              45-50 mins to Home
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              gap: 5,
              flexDirection: 'row',
              alignItems: 'center',
              flexShrink: 1,
            }}>
            <Text
              style={[styles.headerText, {width: '85%', paddingLeft: 20}]}
              numberOfLines={1}
              ellipsizeMode="tail">
              Uttap Swain Building, Nayabazar
            </Text>
            <ArrowDropDown width={20} height={20} />
          </View>
        </TouchableOpacity>

        {/* Cart Item */}
        <View style={styles.cartItem}>
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Kadai Paneer Meal Dabba</Text>
            <Text style={styles.itemPrice}>₹209</Text>
            <Text style={styles.itemDescription}>
              Meal Addon: Add Cutlery [1 Pc]{'\n'}
              Roti Add-on: Ghee{'\n'}
              Dal Choice (choose any 1): Dal Fry
            </Text>
          </View>
          <View style={styles.itemQuantity}>
            <TouchableOpacity onPress={() => setQuantity(quantity - 1)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Add order note */}
        <TextInput
          placeholder="Add order note (Optional)"
          style={styles.orderNoteInput}
          placeholderTextColor={'black'}
        />

        {/* Price Breakdown */}
        <Typography
          style={{marginHorizontal: 16, marginTop: 24, fontWeight: '500'}}>
          Bill Details
        </Typography>
        <View style={styles.priceBreakdown}>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Subtotal</Text>
            <Text style={styles.priceValue}>₹209.00</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Item taxes</Text>
            <Text style={styles.priceValue}>₹10.46</Text>
          </View>
          <View style={styles.priceRow}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Delivery charges</Text>
            </TouchableOpacity>
            <Text style={styles.priceValue}>₹27.00</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Packing charges</Text>
            <Text style={styles.priceValue}>₹5.00</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>To Pay</Text>
            <Text style={styles.totalValue}>₹251.46</Text>
          </View>
        </View>

        {slotSelected && (
          <>
            <Typography
              style={{marginHorizontal: 16, marginTop: 24, fontWeight: '500'}}>
              Delivery Slot
            </Typography>
            <View style={styles.slotDetails}>
              <Text style={styles.slotTime}>
                {formatDate(selectedDate)} at {formatTime(selectedTime)}
              </Text>
              <TouchableOpacity onPress={() => setShowSelectSlotModal(true)}>
                <Text style={styles.changeSlot}>CHANGE</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>

      <View style={styles.deliverySlotContainer}>
        {slotSelected ? (
          <Button
            title="SELECT PAYMENT MODE"
            width={'100%'}
            onPress={() => navigation.navigate('PaymentOptions')}
          />
        ) : (
          <Button
            title="SELECT SLOT"
            width={'100%'}
            onPress={() => setShowSelectSlotModal(true)}
          />
        )}
      </View>

      {/* Modal for selecting date and time */}
      <ReactNativeModal
        isVisible={showSelectSlotModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Delivery timing</Text>
            <Text style={styles.modalSubtitle}>
              Select your preferred delivery date and time.
            </Text>

            <View style={styles.pickerContainer}>
              {/* Date Picker */}
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={styles.pickerText}>
                  {formatDate(selectedDate)}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={selectedDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
              )}

              {/* Time Picker */}
              <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                <Text style={styles.pickerText}>
                  {formatTime(selectedTime)}
                </Text>
              </TouchableOpacity>
              {showTimePicker && (
                <DateTimePicker
                  value={selectedTime || new Date()}
                  mode="time"
                  is24Hour={false}
                  display="default"
                  onChange={onChangeTime}
                />
              )}
            </View>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => {
                setShowSelectSlotModal(false);
                setSlotSelected(true);
              }}>
              <Text style={styles.confirmButtonText}>CONFIRM SLOT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>

      <ViewAddressesModal
        isModalVisible={showAddressModal}
        setIsModalVisible={setShowAddressModal}
        showAddAddressModal={showAddAddressModal}
        setAddShowAddressModal={setAddShowAddressModal}
      />
      <AddAddressModal
        isModalVisible={showAddAddressModal}
        setIsModalVisible={setAddShowAddressModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'flex-start',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  modalSubtitle: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 10,
  },
  warningText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  pickerText: {
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'black',
  },
  confirmButton: {
    backgroundColor: '#0A9AB2',
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    color: 'black',
  },
  header: {
    backgroundColor: '#FFF',
    padding: 10,
    color: 'black',
    textAlign: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  cartItem: {
    backgroundColor: '#FFF',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
    borderRadius: 16,
    // marginVertical: 10,
  },
  itemDetails: {
    flex: 1,
  },
  slotLocation: {
    fontSize: 16,
    color: 'black',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemDescription: {
    fontSize: 14,
    color: 'black',
    marginVertical: 5,
  },
  itemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: '#000',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
    color: 'black',
  },
  orderNoteInput: {
    backgroundColor: '#FFF',
    padding: 15,
    // marginVertical: 10,
    color: 'black',
    marginHorizontal: 16,
    borderRadius: 16,
  },
  rewardContainer: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
    color: 'black',
  },
  rewardText: {
    color: '#FFF',
  },

  priceBreakdown: {
    backgroundColor: '#FFF',
    padding: 15,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  priceLabel: {
    fontSize: 16,
    color: '#666',
  },
  priceValue: {
    fontSize: 16,
    color: '#000',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  linkText: {
    color: '#0A9AB2',
    fontSize: 16,
  },
  deliveryMethodContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
    gap: 20,
  },
  methodButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#7CB342',
    borderWidth: 1,
  },
  selectedMethod: {
    backgroundColor: '#7CB342',
  },
  methodText: {
    color: 'black',
    fontSize: 16,
  },
  deliverySlotContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    // marginVertical: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  deliverySlotText: {
    fontSize: 14,
    color: 'black',
  },
  slotDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    margin: 16,
  },
  slotTime: {
    fontSize: 16,
    color: 'black',
  },
  changeSlot: {
    color: '#0A9AB2',
    fontSize: 16,
  },
});

export default Cart;
