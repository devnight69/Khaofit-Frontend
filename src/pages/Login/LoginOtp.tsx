import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';
import OtpVerification from '../OTP/OTP';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '~/redux/reducers/rootReducer';
import {postAPI} from '~/api/api';
import {setAuthSlice} from '~/redux/slices/AuthSlice';

const LoginOtp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const authSlice: any = useSelector((state: RootState) => state.AuthSlice);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const submitOtpHandler = async () => {
    setIsLoading(true);
    try {
      const response: any = await postAPI('/auth/verify-otp', {
        mobileNumber: authSlice?.mobileNumber,
        otp: authSlice?.otpValue,
        txnId: authSlice.txnId,
      });
      if (response?.response && response?.data?.new) {
        setIsLoading(false);
        navigation.navigate('signupPage');
      } else {
        navigation.navigate('homepage');
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const resendOtpHandler = async () => {
    setIsLoading(true);
    try {
      const response: any = await postAPI('/auth/send-otp', {
        mobileNumber: authSlice?.mobileNumber,
      });
      if (response?.response) {
        setIsLoading(false);
        navigation.navigate('LoginOtp');
        dispatch(
          setAuthSlice({
            ...authSlice,
            txnId: response?.data?.txnId,
            mobileNumber: authSlice?.mobileNumber,
          }),
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <OtpVerification
        submitOtpHandler={submitOtpHandler} // Pass a mock OTP for testing
        resendOtpHandler={resendOtpHandler}
        phoneNumber={`Enter the 6-digit OTP sent to your mobile number ${authSlice?.mobileNumber
          ?.slice(0, 7)
          ?.replace(/\d/g, 'x')}${authSlice?.mobileNumber?.slice(7)}`}
        isLoading={isLoading}
      />
    </>
  );
};

export default LoginOtp;
