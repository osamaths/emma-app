import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Questions from '../screens/Questions';
import {colors} from '../js/sharedStyle';

const Stack = createNativeStackNavigator();

function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="questions"
          component={Questions}
          options={{title: '', headerTintColor: colors.primary}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routers;
