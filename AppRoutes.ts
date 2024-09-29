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
  {
    name: 'MenuPage',
    component: MenuPage,
    options: {
      title: '',
      headerStyle: {
        backgroundColor: '#97795E', // Add opacity here (0.8 is for 80% opacity)
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
    name: 'Cart',
    component: Cart,
    options: {
      title: 'My Cart',
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
    name: 'KnowAboutBMI',
    component: KnowAboutBMI,
    options: {
      title: 'Know About BMI',
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
    name: 'BMIInputPage',
    component: BMIInputPage,
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
  {
    name: 'BMIResultPage',
    component: BMIResultPage,
    options: {
      title: 'Your BMI Result',
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
    name: 'HealthGoals',
    component: HealthGoals,
    options: {
      title: 'Health Goals',
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
    name: 'BMICaloriesPage',
    component: BMICaloriesPage,
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
  {
    name: 'ReferEarn',
    component: ReferEarn,
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
