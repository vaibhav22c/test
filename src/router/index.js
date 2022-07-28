import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/home';
import Devices from '../screen/devices';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Devices' }} />
        <Stack.Screen name="Devices" component={Devices} options={{ title: 'Device' }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(Router);