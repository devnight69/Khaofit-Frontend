import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SvgKhaoFitLogo from '~/assets/logo.svg';
import SvgDeliveryGuy from '~/assets/delivery_guy.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {colors} from '~/gloabalStyles/globalStyles';
import DeliveryGuyAnimation from '~/utils/LottieAnimation/DeliveryGuy.json';
import LottieView from 'lottie-react-native';
import {RootStackParamList} from 'RootStackParams';
import {postAPI} from '~/api/api';
import Loader from '~/components/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthSlice} from '~/redux/slices/AuthSlice';
import {RootState} from '~/redux/reducers/rootReducer';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const authSlice = useSelector((state: RootState) => state.AuthSlice);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  const handleSendOtp = async () => {
    setIsLoading(true);
    try {
      const response: any = await postAPI('/auth/send-otp', {
        mobileNumber: phoneNumber,
      });
      if (response?.response) {
        setIsLoading(false);
        navigation.navigate('LoginOtp');
        dispatch(
          setAuthSlice({
            ...authSlice,
            txnId: response?.data?.txnId,
            mobileNumber: phoneNumber,
          }),
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgKhaoFitLogo width={300} height={70} />
      </View>

      <View style={styles.imageContainer}>
        <LottieView
          resizeMode="contain"
          source={DeliveryGuyAnimation}
          autoPlay
          loop={true}
          style={{width: 400, height: 400}}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.headingText}>Log into your</Text>
        <Text style={styles.headingTextBold}>khao.fit Account</Text>

        {/* Phone input container */}
        <View style={styles.phoneInputContainer}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={text => {
              // Allow only numbers and limit to 10 digits
              const formattedText = text.replace(/[^0-9]/g, '').slice(0, 10);
              setPhoneNumber(formattedText);
            }}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            {backgroundColor: phoneNumber ? '#00AEEF' : '#B0E0FF'},
          ]}
          onPress={handleSendOtp}
          disabled={!phoneNumber}>
          {isLoading ? (
            <Loader visible={true} color="#FFF" size="large" />
          ) : (
            <Text style={styles.continueButtonText}>Continue</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 22,
    color: '#333',
  },
  headingTextBold: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginVertical: 20,
  },
  countryCode: {
    fontSize: 16,
    color: 'black',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: 'black',
  },
  continueButton: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    fontSize: 14,
    color: '#9C9C9C',
  },
  signupLink: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default LoginPage;
