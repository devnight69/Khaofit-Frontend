import Homepage from './src/pages/Homepage/Homepage';
import LoginPage from './src/pages/Login/Login';
import OtpVerification from './src/pages/OTP/OTP';
import SignupPage from './src/pages/Signup/Signup';

export const AppRoutes = [
  {
    name: 'loginPage',
    component: LoginPage,
    options: {headerShown: false},
  },
  {
    name: 'homepage',
    component: Homepage,
    options: {headerShown: false},
  },
  {
    name: 'otpPage',
    component: OtpVerification,
    options: {
      title: 'OTP Verification',
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: 'black',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'signupPage',
    component: SignupPage,
    options: {
      title: '',
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: 'black',
      },
      headerTitleAlign: 'center',
    },
  },
];
