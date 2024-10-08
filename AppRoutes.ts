import TabNavigator from '~/components/Footer/TabNavigator';
import BMIInputPage from './src/pages/BMI/BMIInputPage';
import BMIResultPage from './src/pages/BMI/BMIResultPage';
import KnowAboutBMI from './src/pages/BMI/KnowAboutBMI';
import BMICaloriesPage from './src/pages/CaloriePage/CaloriePage';
import Cart from './src/pages/Cart/Cart';
import HealthGoals from './src/pages/HealthGoals/HealthGoals';
import Homepage from './src/pages/Homepage/Homepage';
import LoginPage from './src/pages/Login/Login';
import MenuPage from './src/pages/MenuPage/MenuPage';
import OtpVerification from './src/pages/OTP/OTP';
import ReferEarn from './src/pages/ReferEarn/ReferEarn';
import SignupPage from './src/pages/Signup/Signup';
import PaymentOptions from '~/pages/Payment/PaymentOptions';
import LoginOtp from '~/pages/Login/LoginOtp';

export const AppRoutes = [
  {
    name: 'loginPage',
    component: LoginPage,
    options: {headerShown: false},
    headerTintColor: '#FFF',
  },
  {
    name: 'LoginOtp',
    component: LoginOtp,
    options: {
      headerTintColor: '#FFF',
      title: '',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'homepage',
    component: TabNavigator,
    options: {headerShown: false},
    headerTintColor: '#FFF',
  },
  {
    name: 'otpPage',
    component: OtpVerification,
    options: {
      headerTintColor: '#FFF',
      title: 'OTP Verification',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'signupPage',
    component: SignupPage,
    options: {
      headerTintColor: '#FFF',
      title: '',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'MenuPage',
    component: MenuPage,
    options: {
      headerTintColor: '#FFF',
      title: '',
      headerStyle: {
        backgroundColor: '#97795E', // Add opacity here (0.8 is for 80% opacity)
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'Cart',
    component: Cart,
    options: {
      headerTintColor: '#FFF',
      title: 'My Cart',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'KnowAboutBMI',
    component: KnowAboutBMI,
    options: {
      headerTintColor: '#FFF',
      title: 'Know About BMI',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'BMIInputPage',
    component: BMIInputPage,
    options: {
      headerTintColor: '#FFF',
      title: '',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'BMIResultPage',
    component: BMIResultPage,
    options: {
      headerTintColor: '#FFF',
      title: 'Your BMI Result',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'HealthGoals',
    component: HealthGoals,
    options: {
      headerTintColor: '#FFF',
      title: 'Health Goals',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'BMICaloriesPage',
    component: BMICaloriesPage,
    options: {
      headerTintColor: '#FFF',
      title: '',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'ReferEarn',
    component: ReferEarn,
    options: {
      headerTintColor: '#FFF',
      title: '',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
  {
    name: 'PaymentOptions',
    component: PaymentOptions,
    options: {
      headerTintColor: '#FFF',
      title: '',
      headerStyle: {
        backgroundColor: '#10C0DF',
      },
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFF',
      },
      headerTitleAlign: 'center',
    },
  },
];
