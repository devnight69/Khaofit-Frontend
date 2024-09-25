import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Typography from '../../components/Typography/Typography';
import FlexWrapper from '../../components/FlexWrapper/FlexWrapper';
import Label from '../../components/InputLabel/InputLabel';
import Button from '../../components/Button/Button';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../RootStackParams';
import {colors} from '../../gloabalStyles/globalStyles';

function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Function to format date in DD/MM/YYYY
  const handleDobChange = (text: string) => {
    let formattedText = text.replace(/\D/g, ''); // Remove all non-numeric characters
    if (formattedText.length >= 3 && formattedText.length <= 4) {
      formattedText = `${formattedText.substring(
        0,
        2,
      )}/${formattedText.substring(2)}`;
    } else if (formattedText.length > 4) {
      formattedText = `${formattedText.substring(
        0,
        2,
      )}/${formattedText.substring(2, 4)}/${formattedText.substring(4, 8)}`;
    }
    setDob(formattedText);
  };

  const genderOptions = ['Male', 'Female', 'Other'];

  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <FlexWrapper direction="column" gap={6}>
          <Typography
            align="left"
            style={{
              fontWeight: '600',
              fontSize: 40,
              width: '80%',
              lineHeight: 44,
            }}>
            Create your new account
          </Typography>
          <Typography
            align="left"
            style={{
              fontWeight: '400',
              fontSize: 16,
              color: 'gray',
              width: '85%',
            }}>
            Create an account to start looking for the health food you like
          </Typography>

          {/* Full Name Field */}
          <View style={{paddingTop: 10}}>
            <Label
              label="Full Name"
              labelStyle={{fontSize: 16, color: 'black', fontWeight: 'normal'}}>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  padding: 8,
                  fontSize: 16,
                }}
                placeholder="Enter your full name"
                placeholderTextColor="black"
                value={fullName}
                onChangeText={setFullName}
              />
            </Label>
          </View>

          {/* Gender Field as Chips */}
          <View style={{paddingTop: 10}}>
            <Label
              label="Gender"
              labelStyle={{fontSize: 16, color: 'black', fontWeight: 'normal'}}>
              <View style={styles.chipWrapper}>
                {genderOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.chip,
                      gender === option && styles.selectedChip,
                    ]}
                    onPress={() => setGender(option)}>
                    <Text
                      style={[
                        styles.chipText,
                        gender === option && styles.selectedChipText,
                      ]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Label>
          </View>

          {/* Date of Birth Field */}
          <View style={{paddingTop: 10}}>
            <Label
              label="Date of Birth"
              labelStyle={{fontSize: 16, color: 'black', fontWeight: 'normal'}}>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  padding: 8,
                  fontSize: 16,
                }}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="black"
                value={dob}
                keyboardType="numeric"
                onChangeText={handleDobChange}
                maxLength={10}
              />
            </Label>
          </View>

          {/* Terms and Conditions */}
          <FlexWrapper align="flex-start">
            <CheckBox
              value={termsAccepted}
              onValueChange={setTermsAccepted}
              tintColors={{
                true: colors.secondary,
                false: colors.secondary,
              }}
            />
            <Text style={styles.text}>
              I Agree with <Text style={styles.link}>Terms of Service</Text> and{' '}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </FlexWrapper>

          {/* Register Button */}
          <Button
            title="Register"
            width={'100%'}
            onPress={() => navigation.navigate('KnowAboutBMI')}
          />

          {/* Sign In Option */}
          <FlexWrapper gap={5} justify="center" align="center">
            <Typography
              children="Don't have an account?"
              style={{fontWeight: '500'}}
            />
            <TouchableOpacity onPress={() => navigation.navigate('loginPage')}>
              <Typography
                children="Sign In"
                color={colors.secondary}
                style={{fontWeight: '500'}}
              />
            </TouchableOpacity>
          </FlexWrapper>
        </FlexWrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    width: '90%',
  },
  link: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  chipWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    width: '30%',
    textAlign: 'center',
  },
  selectedChip: {
    backgroundColor: colors.secondary,
  },
  chipText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  selectedChipText: {
    color: 'white',
  },
});

export default SignupPage;
