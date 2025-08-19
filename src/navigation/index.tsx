import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from '../screens';
import type { RootStackParamList, ISouqAppProps } from '../types';
import { ScreenNames } from '../constants';
import useNavigation from './useNavigation';

const Stack = createStackNavigator<RootStackParamList>();

const RoutesNavigator = (props: ISouqAppProps) => {
  useNavigation(props);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ScreenNames.Home} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RoutesNavigator;
