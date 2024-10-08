import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
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
import {postAPI} from '~/api/api';
import {useSelector} from 'react-redux';
import {RootState} from '~/redux/reducers/rootReducer';
import moment from 'moment';

function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const authSlice = useSelector((state: RootState) => state.AuthSlice);

  const handleDobChange = (text: string) => {
    let formattedText = text.replace(/\D/g, ''); // Remove all non-numeric characters

    // Format the input as the user types in DD/MM/YYYY
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

    setDob(formattedText); // Display the formatted date as DD/MM/YYYY

    // Convert to YYYY-MM-DD format if the input is complete
    if (formattedText.length === 10) {
      const formattedDate = moment(formattedText, 'DD/MM/YYYY').format(
        'YYYY-MM-DD',
      );
      setDob(formattedDate); // Set the date in YYYY-MM-DD format
    }
  };

  const getAllGender = [
    {name: 'Male', code: 'MALE'},
    {name: 'Female', code: 'FEMALE'},
    {name: 'Others', code: 'OTHERS'},
  ];

  console.log(fullName, dob, gender, 'hahahs');
  const handleCreateProfile = async () => {
    setIsLoading(true);
    try {
      const response: any = await postAPI('/auth/save/profile', {
        fullName: fullName,
        dateOfBirth: dob,
        mobileNumber: authSlice?.mobileNumber,
        gender: gender,
        referredCode: '',
        txnId: authSlice?.txnId,
      });
      if (response?.response) {
        setIsLoading(false);
        navigation.navigate('KnowAboutBMI');
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#FFF'}}>
      <View style={styles.container}>
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
                labelStyle={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 'normal',
                }}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    padding: 8,
                    fontSize: 16,
                    color: 'black',
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
                labelStyle={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 'normal',
                }}>
                <View style={styles.chipWrapper}>
                  {getAllGender.map((option: {name: string; code: string}) => (
                    <TouchableOpacity
                      key={option.code}
                      style={[
                        styles.chip,
                        gender === option.code && styles.selectedChip,
                      ]}
                      onPress={() => setGender(option.code)}>
                      <Text
                        style={[
                          styles.chipText,
                          gender === option.code && styles.selectedChipText,
                        ]}>
                        {option.name}
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
                labelStyle={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 'normal',
                }}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    padding: 8,
                    fontSize: 16,
                    color: 'black',
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
                I Agree with <Text style={styles.link}>Terms of Service</Text>{' '}
                and <Text style={styles.link}>Privacy Policy</Text>
              </Text>
            </FlexWrapper>
          </FlexWrapper>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          isLoading={isLoading}
          title="Register"
          width={'100%'}
          onPress={handleCreateProfile}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    // paddingTop: 20,
  },
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
    borderColor: colors.secondary,
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

export default SignupPage;
