import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from '~/pages/Homepage/Homepage';
import ReferEarn from '~/pages/ReferEarn/ReferEarn';
import SignupPage from '~/pages/Signup/Signup';
import Footer from './Footer';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const TabScreens = [
    {
      name: 'Home',
      component: Homepage,
    },
    {
      name: 'Wallet',
      component: ReferEarn,
    },
    {
      name: 'Profile',
      component: SignupPage,
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <Footer {...props} />}>
      {TabScreens.map((route, index) => (
        <Tab.Screen key={index} name={route.name} component={route.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
