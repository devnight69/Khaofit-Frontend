import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SvgKhaoFitLogo from '../../assets/logo.svg';
import SvgDeliveryGuy from '../../assets/delivery_guy.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../gloabalStyles/globalStyles';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    // Handle continue logic here, e.g., verify phone number, navigate to OTP screen, etc.
    console.log('Phone number entered: +91', phoneNumber);
    navigation.navigate('otpPage');
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <SvgKhaoFitLogo width={300} height={70} />
      </View>

      <View style={styles.imageContainer}>
        <SvgDeliveryGuy width={360} height={360} />
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
          onPress={handleContinue}
          disabled={!phoneNumber}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}> Sign up</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: 50,
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
    marginTop: 20,
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
