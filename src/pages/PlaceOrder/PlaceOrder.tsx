import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Button from '~/components/Button/Button';
import Typography from '~/components/Typography/Typography';

const PlaceOrder = () => {
  const orderDetails = {
    imageUrl: 'https://via.placeholder.com/150',
    itemName: 'Grilled Chicken Salad',
    price: 250,
    itemDetails:
      'Healthy grilled chicken salad with greens and vinaigrette dressing',
    billingDetails: {
      subtotal: 250,
      deliveryCharge: 20,
      discount: 15,
      total: 255,
    },
    address: 'Home | Uttap Swain Building, Shree Ram Lane, City - 12345',
    status: 'In Progress',
    estimatedTime: '35-45 mins',
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.headerContainer}>
            <Text style={styles.successMessage}>
              Order Successfully Placed!
            </Text>
            <Typography style={styles.thankYouMessage}>
              Thank you for ordering with KhaoFit!
            </Typography>
          </View>

          {/* Order Details Section */}
          <View style={styles.orderDetailsContainer}>
            <Image
              source={{uri: orderDetails.imageUrl}}
              style={styles.orderImage}
            />
            <View style={styles.orderInfo}>
              <Typography style={styles.itemName}>
                {orderDetails.itemName}
              </Typography>
              <Typography style={styles.itemDetails}>
                {orderDetails.itemDetails}
              </Typography>
              <Typography style={styles.price}>
                ₹{orderDetails.price}
              </Typography>
            </View>
          </View>

          {/* Billing Details Section */}
          <View style={styles.section}>
            <Typography style={styles.sectionTitle}>Billing Details</Typography>
            <View style={styles.billingDetails}>
              <Typography>
                Subtotal: ₹{orderDetails.billingDetails.subtotal}
              </Typography>
              <Typography>
                Delivery Charge: ₹{orderDetails.billingDetails.deliveryCharge}
              </Typography>
              <Typography>
                Discount: -₹{orderDetails.billingDetails.discount}
              </Typography>
              <View style={styles.totalAmountContainer}>
                <Typography style={styles.totalLabel}>Total:</Typography>
                <Typography style={styles.totalAmount}>
                  ₹{orderDetails.billingDetails.total}
                </Typography>
              </View>
            </View>
          </View>

          {/* Address Details Section */}
          <View style={styles.section}>
            <Typography style={styles.sectionTitle}>Deliver To</Typography>
            <Typography style={styles.addressText}>
              {orderDetails.address}
            </Typography>
          </View>

          {/* Order Status Section */}
          <View style={styles.section}>
            <Typography style={styles.sectionTitle}>Order Status</Typography>
            <Typography>Status: {orderDetails.status}</Typography>
            <Typography>
              Estimated Delivery Time: {orderDetails.estimatedTime}
            </Typography>
          </View>

          {/* Thank You Message */}
          <View style={styles.section}>
            <Typography style={styles.thankYouMessage}>
              We appreciate your business! Your healthy meal is on its way.
            </Typography>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Place Another Order" width={'100%'} onPress={() => {}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  successMessage: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
  thankYouMessage: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 8,
  },
  orderDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  orderImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  orderInfo: {
    flexDirection: 'column',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  itemDetails: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    color: 'green',
    fontWeight: '500',
    marginTop: 6,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A9AB2',
    marginBottom: 10,
  },
  billingDetails: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 10,
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalAmount: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 16,
  },
  addressText: {
    fontSize: 16,
    color: 'black',
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
});

export default PlaceOrder;
