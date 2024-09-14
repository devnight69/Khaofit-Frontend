// useLogNavigationStack.ts
import {useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParams';

const useLogNavigationStack = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();

  const logNavigationStack = () => {
    const state = navigation.getState();
    if (state && state.routes) {
      const screenNames = state.routes.map(route => route.name);
      console.log('Current stack screens:', screenNames);
    }
  };

  useEffect(() => {
    if (isFocused) {
      logNavigationStack();
    }
  }, [isFocused, navigation]);
};

export default useLogNavigationStack;
