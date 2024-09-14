import React, {useState} from 'react';
import {View} from 'react-native';
import Typography from '../../components/Typography/Typography';
import FlexWrapper from '../../components/FlexWrapper/FlexWrapper';
import Label from '../../components/InputLabel/InputLabel';
import PhoneNumberInput from '../../components/PhoneNumberInput/PhoneNumberInput';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={{marginHorizontal: 20, marginTop: 40}}>
        <FlexWrapper direction="column" gap={6}>
          <Typography
            align="left"
            style={{
              fontWeight: '600',
              fontSize: 40,
              width: '80%',
              lineHeight: 44,
            }}>
            Login to your account.
          </Typography>
          <Typography
            align="left"
            style={{fontWeight: '400', fontSize: 16, color: 'gray'}}>
            Please sign in to your account
          </Typography>
          <View style={{paddingTop: 10}}>
            <Label
              label="Phone Number"
              labelStyle={{fontSize: 16, color: 'black', fontWeight: 'normal'}}>
              <PhoneNumberInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="98611xxxxx"
                maxLength={10}
              />
            </Label>
          </View>

          <Button
            title="Sign In"
            width={'100%'}
            onPress={() => navigation.navigate('otpPage')}
          />
          <FlexWrapper gap={5} justify="center" align="center">
            <Typography
              children="Don't have an account?"
              style={{fontWeight: '500'}}
            />
            <Typography
              children="Register"
              color="#FFA500"
              style={{fontWeight: '500'}}
              onPress={() => navigation.navigate('signupPage')}
            />
          </FlexWrapper>
        </FlexWrapper>
      </View>
    </View>
  );
}

export default LoginPage;
