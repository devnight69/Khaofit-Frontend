import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';
import {colors} from '../../gloabalStyles/globalStyles';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']); // For storing the OTP digits
  const [timer, setTimer] = useState(60); // Timer duration

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Refs to control the focus of each TextInput
  const otpRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  // Update OTP state for each input and move to next input automatically
  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < otpRefs.length - 1) {
      otpRefs[index + 1]?.current?.focus(); // Move to the next input
    }
    if (value === '' && index > 0) {
      otpRefs[index - 1]?.current?.focus(); // Move back to the previous input if empty
    }
  };

  // Countdown logic
  useEffect(() => {
    let interval: NodeJS.Timeout | any = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    } else if (timer === 0 && interval) {
      clearInterval(interval);
    }
    return () => interval && clearInterval(interval);
  }, [timer]);

  // Resend OTP functionality
  const handleResendOtp = () => {
    setTimer(60);
    // Logic to resend the OTP
    console.log('Resend OTP clicked');
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.subHeader}>Mobile Verification</Text>
        <Text style={styles.instructions}>
          Enter the verification code sent on your mobile number, +91 98611*****
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={otpRefs[index]} // Attach the ref to each TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={value => handleOtpChange(index, value)}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace' && index > 0 && !digit) {
                  otpRefs[index - 1]?.current?.focus(); // Move back to the previous input on Backspace
                }
              }}
            />
          ))}
        </View>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn’t receive code?</Text>
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{`00:${
            timer < 10 ? `0${timer}` : timer
          }`}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate('signupPage')}
          width={'100%'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subHeader: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: 'black',
  },
  instructions: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 20,
    width: '95%',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    width: 50,
    color: 'black',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    color: '#808080',
    fontSize: 14,
  },
  resendLink: {
    color: colors.secondary,
    fontSize: 14,
    marginLeft: 5,
  },
  timerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  timerText: {
    fontSize: 14,
    color: '#808080',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    gap: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12, // Consistent rounded corners
    paddingVertical: 14, // Increased padding for more clickable area
    // marginHorizontal: 10,
    alignItems: 'center',
    elevation: 3, // Added elevation for better button visibility
  },
  buttonText: {
    fontSize: 18, // Larger button text for better readability
    color: '#00AEEF',
    fontWeight: 'bold',
  },
});

export default OtpVerification;
