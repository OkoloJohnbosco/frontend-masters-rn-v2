import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import {TouchableOpacity, Alert, Switch} from 'react-native';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);

  const toggleSwitch = () => setIsEnabled(prev => !prev);
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'papayawhip'},
        headerShown: true,
      }}
      initialRouteName="Home"
      detachInactiveScreens={true}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({route}) => ({
          // @ts-expect-error
          title: route.params?.paletteName,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => (
            <TouchableOpacity onPress={() => Alert.alert('John')}>
              <Switch
                trackColor={{false: '#dc322f', true: 'green'}}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#dc322f"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </TouchableOpacity>
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <TouchableOpacity onPress={() => Alert.alert('John')}>
              <Switch
                trackColor={{false: '#dc322f', true: 'green'}}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#dc322f"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </TouchableOpacity>
          ),
          // headerStyle: {backgroundColor: 'papayawhip'},
          // headerLeftContainerStyle: {color: 'teal'},
        })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
