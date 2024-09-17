import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import ClockIcon from '../../assets/Clock.svg';
import LocationIcon from '../../assets/Location.svg';
import ReactNativeModal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import AddAddressModal from './AddAddressModal';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDelivery, setIsDelivery] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPaymentModal, setShowPaymentModal] = useState(false); // New state for payment modal
  const [selectedPayment, setSelectedPayment] = useState(''); // Track selected payment mode
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

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
        <View style={styles.header}>
          <Text style={styles.headerText}>CART - 1 Item</Text>
        </View>

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

        {/* Reward message */}
        {/* <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>
            You will earn 5 ♥ after order is delivered!
          </Text>
        </View> */}

        {/* Apply Coupon Code */}
        <TouchableOpacity style={styles.couponContainer}>
          <Text style={styles.couponText}>Apply Coupon Code</Text>
          <Text style={styles.viewOffersText}>View Offers</Text>
        </TouchableOpacity>

        {/* Price Breakdown */}
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
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₹251.46</Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <View>
          <View style={styles.deliveryMethodContainer}>
            <TouchableOpacity
              style={[styles.methodButton, isDelivery && styles.selectedMethod]}
              onPress={() => setIsDelivery(true)}>
              <Text style={styles.methodText}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.methodButton,
                !isDelivery && styles.selectedMethod,
              ]}
              onPress={() => setIsDelivery(false)}>
              <Text style={styles.methodText}>Takeaway</Text>
            </TouchableOpacity>
          </View>

          {isDelivery ? (
            <View style={styles.deliverySlotContainer}>
              <Text style={styles.deliverySlotText}>DELIVERY SLOT</Text>
              <View style={styles.slotDetails}>
                <Text style={styles.slotTime}>
                  {formatDate(selectedDate)} {formatTime(selectedTime)}
                </Text>
                <TouchableOpacity onPress={() => setShowModal(true)}>
                  <Text style={styles.changeSlot}>CHANGE</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.deliverySlotContainer}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <LocationIcon width={30} height={30} />
                <View style={{width: '88%'}}>
                  <Text style={styles.deliverySlotText}>PICKUP ORDER FROM</Text>
                  <View style={styles.slotDetails}>
                    <Text style={styles.slotLocation}>Airoli</Text>
                    <Text style={{color: 'black'}}>
                      Aaloo pav, shop no 21, Lake Bloom residency, Saki Vihar
                      Rd, Vidya milind nagar, Powai, Mumbai, Maharastra, 40072
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  paddingVertical: 5,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <ClockIcon />
                  <View style={styles.slotDetails}>
                    <Text style={styles.deliverySlotText}>PICKUP ORDER BY</Text>
                    <TouchableOpacity onPress={() => setShowModal(true)}>
                      <Text style={styles.slotTime}>
                        {formatDate(selectedDate)} {formatTime(selectedTime)}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text
                  style={styles.changeSlot}
                  onPress={() => setShowModal(true)}>
                  CHANGE
                </Text>
              </View>
            </View>
          )}
        </View>

        {!selectedPayment ? (
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => setShowPaymentModal(true)} // Show payment modal
          >
            <Text style={styles.paymentButtonText}>SELECT PAYMENT MODE</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.paymentInfoContainer}>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>PAYMENT</Text>
              <TouchableOpacity onPress={() => setShowPaymentModal(true)}>
                <Text style={styles.selectedPaymentText}>
                  {selectedPayment || 'Select Payment Mode'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Select Address Button */}
            <TouchableOpacity
              style={styles.addressButton}
              onPress={() => setShowAddressModal(true)}>
              <Text style={styles.addressButtonText}>SELECT ADDRESS</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ReactNativeModal
        isVisible={isModalVisible}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text>Your modal content here</Text>

            {/* Close button */}
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>

      {/* Modal for selecting date and time */}
      <ReactNativeModal
        isVisible={showModal}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Delivery timing</Text>
            <Text style={styles.modalSubtitle}>
              Select from available slots
            </Text>
            <Text style={styles.warningText}>
              Note: Changing slot might remove items from the cart.
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
              onPress={() => setShowModal(false)}>
              <Text style={styles.confirmButtonText}>CONFIRM SLOT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>

      <ReactNativeModal
        isVisible={showPaymentModal}
        style={{justifyContent: 'flex-end', alignItems: 'center', margin: 0}}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select Payment Mode</Text>

          {/* Payment Mode Options */}
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => {
              setSelectedPayment('Cash');
              setShowPaymentModal(false); // Close modal after selecting
            }}>
            <Text style={styles.paymentOptionText}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => {
              setSelectedPayment('Online');
              setShowPaymentModal(false); // Close modal after selecting
            }}>
            <Text style={styles.paymentOptionText}>Online</Text>
          </TouchableOpacity>

          {/* Close Modal Button */}
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => setShowPaymentModal(false)}>
            <Text style={styles.confirmButtonText}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>

      <AddAddressModal
        isModalVisible={showAddressModal}
        setIsModalVisible={setShowAddressModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  paymentButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 5,
  },
  paymentButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paymentInfoContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    paddingBottom: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // marginVertical: 10,
    borderRadius: 5,
  },
  addressButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    alignItems: 'center',
    // marginVertical: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  paymentOption: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    marginVertical: 5,
  },
  addressButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentLabel: {
    fontSize: 14,
    color: 'grey',
  },
  selectedPaymentText: {
    fontSize: 16,
    color: 'black',
  },

  paymentOptionText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },

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
    backgroundColor: '#FF5722',
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
    backgroundColor: '#7CB342',
    padding: 15,
    color: 'black',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  cartItem: {
    backgroundColor: '#FFF',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    borderRadius: 8,
    color: 'black',
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
  couponContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    // marginBottom: 10,
  },
  couponText: {
    color: '#FF5722',
    fontSize: 16,
  },
  viewOffersText: {
    color: '#9E9E9E',
  },
  priceBreakdown: {
    backgroundColor: '#FFF',
    padding: 15,
    // marginVertical: 10,
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
    color: '#FF5722',
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
    padding: 15,
    // marginVertical: 10,
  },
  deliverySlotText: {
    fontSize: 14,
    color: 'black',
  },
  slotDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 5,
    backgroundColor: '#F5FAFE',
    padding: 16,
    borderRadius: 12,
  },
  slotTime: {
    fontSize: 16,
    color: 'black',
  },
  changeSlot: {
    color: '#FF5722',
    fontSize: 16,
  },
});

export default Cart;
