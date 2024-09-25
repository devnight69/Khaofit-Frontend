/// App.js

import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from './AppRoutes';
import 'react-native-devsettings/withAsyncStorage';
import {colors} from './src/gloabalStyles/globalStyles';
const Stack = createNativeStackNavigator();
const navigation: any = React.createRef();

const App = () => {
  return (
    <>
      <NavigationContainer ref={navigation}>
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor={colors.secondary}
            barStyle="light-content"
          />
          <Stack.Navigator>
            {AppRoutes.map((component: any, index: any) => (
              <Stack.Screen
                key={index}
                name={component.name}
                component={component.component}
                options={component.options}
              />
            ))}
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
};

export default App;
