import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import KhaoFitCoin from '../../assets/fitcoin.svg';
import OnlinePayment from '../../assets/online_payment.svg';
import Cod from '../../assets/cod.svg';
import Typography from '~/components/Typography/Typography';
import Button from '~/components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'RootStackParams';

const PaymentOptions = () => {
  const [khaoFitCoinEnabled, setKhaoFitCoinEnabled] = useState(false);
  const [subscriptionBalanceEnabled, setSubscriptionBalanceEnabled] =
    useState(false);
  const toggleKhaoFitCoinSwitch = () =>
    setKhaoFitCoinEnabled(previousState => !previousState);
  const toggleSubscriptionBalanceSwitch = () =>
    setSubscriptionBalanceEnabled(previousState => !previousState);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Typography style={{fontWeight: '500', fontSize: 16}}>
            Deliver To
          </Typography>
          <View style={styles.addressContainer}>
            <Image
              source={require('~/assets/home_blue.png')}
              style={{width: 30, height: 30}}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingHorizontal: 10,
              }}>
              <Text style={styles.addressText} numberOfLines={1}>
                Home | Uttap Swain Building, Shree Ram Lane...
              </Text>
              <Text style={styles.deliveryInfo}>Delivery in: 35-45 mins</Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#0A9AB2',
              marginBottom: 16,
              marginTop: 6,
            }}
          />

          <Typography
            style={{
              fontWeight: '500',
              fontSize: 16,
              paddingBottom: 10,
              // paddingTop: 10,
            }}>
            Pay online
          </Typography>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   margin: 16,
              padding: 16,
              backgroundColor: '#FFF',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#0A9AB2',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 14,
              }}>
              <View>
                <OnlinePayment width={30} height={30} />
              </View>
              <View style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                <Typography
                  color="black"
                  style={{fontWeight: '500', fontSize: 16}}>
                  Pay via Razorpay
                </Typography>
                <Typography
                  color="gray"
                  style={{fontSize: 14, fontWeight: '400'}}>
                  UPI / Credit or Debit Cards
                </Typography>
              </View>
            </View>
          </View>

          <Typography
            style={{
              fontWeight: '500',
              fontSize: 16,
              paddingBottom: 10,
              paddingTop: 16,
            }}>
            Pay on Delivery
          </Typography>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   margin: 16,
              padding: 16,
              backgroundColor: '#FFF',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#0A9AB2',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 14,
              }}>
              <View>
                <Cod width={30} height={30} />
              </View>
              <View style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                <Typography
                  color="black"
                  style={{fontWeight: '500', fontSize: 16}}>
                  Pay on Delivery (Cash/UPI)
                </Typography>
                <Typography
                  color="gray"
                  style={{fontSize: 14, fontWeight: '400'}}>
                  Cash on delivery is available
                </Typography>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderBottomColor: '#0A9AB2',
              marginBottom: 0,
              marginTop: 24,
            }}
          />

          <Typography
            style={{
              fontWeight: '500',
              fontSize: 20,
              paddingBottom: 10,
              paddingTop: 16,
              color: '#0A9AB2',
            }}>
            Use your coins or subscription balance to reduce total order amount.
          </Typography>

          <Typography
            style={{
              fontWeight: '500',
              fontSize: 16,
              paddingBottom: 10,
              paddingTop: 16,
              marginTop: 10,
            }}>
            Use KhaoFit Coins to Save on Your Order
          </Typography>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   margin: 16,
              padding: 16,
              backgroundColor: '#FFF',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#0A9AB2',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 14,
              }}>
              <View>
                <KhaoFitCoin width={30} height={30} />
              </View>
              <View style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                <Typography
                  color="black"
                  style={{fontWeight: '500', fontSize: 16}}>
                  KhaoFit Coins
                </Typography>
                <Typography
                  color="gray"
                  style={{fontSize: 14, fontWeight: '400'}}>
                  Usable coins: 25 | Total: 75
                </Typography>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <Typography
                color="black"
                style={{fontWeight: '500', fontSize: 16}}>
                ₹15
              </Typography>
              <Switch
                trackColor={{false: '#767577', true: '#0A9AB2'}}
                thumbColor={khaoFitCoinEnabled ? '#0A9AB2' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleKhaoFitCoinSwitch}
                value={khaoFitCoinEnabled}
              />
            </View>
          </View>

          <Typography
            style={{
              fontWeight: '500',
              fontSize: 16,
              paddingBottom: 10,
              paddingTop: 16,
            }}>
            Use your subscription balance
          </Typography>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   margin: 16,
              padding: 16,
              backgroundColor: '#FFF',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#0A9AB2',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 14,
              }}>
              <View>
                <KhaoFitCoin width={30} height={30} />
              </View>
              <View style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                <Typography
                  color="black"
                  style={{fontWeight: '500', fontSize: 16}}>
                  Gold Subscription
                </Typography>
                <Typography
                  color="gray"
                  style={{fontSize: 14, fontWeight: '400'}}>
                  Usable coins: 100 | Total: 500
                </Typography>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <Typography
                color="black"
                style={{fontWeight: '500', fontSize: 16}}>
                ₹15
              </Typography>
              <Switch
                trackColor={{false: '#767577', true: '#0A9AB2'}}
                thumbColor={subscriptionBalanceEnabled ? '#0A9AB2' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSubscriptionBalanceSwitch}
                value={subscriptionBalanceEnabled}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.deliverySlotContainer}>
        {/* Total Information */}
        <View style={styles.totalInfoContainer}>
          <Text style={styles.totalInfoText}>
            1 Item • <Text style={{color: 'green'}}>Total ₹100</Text>
          </Text>
        </View>
        {/* Place Order Button */}
        <Button
          title="Place Order"
          width={'100%'}
          onPress={() => navigation.navigate('PlaceOrder')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  deliverySlotContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  totalInfoContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  totalInfoText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
  },
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    flex: 1,
  },
  infoBox: {
    marginBottom: 15,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  deliveryInfo: {
    fontSize: 14,
    color: 'grey',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 16,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0A9AB2',
  },
  addressText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    // marginLeft: 10,
  },
  paymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  paymentHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  totalAmount: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentOptions;
