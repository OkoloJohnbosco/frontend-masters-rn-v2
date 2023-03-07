import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ModalScreen from './screens/ModalScreen';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'papayawhip'},
          headerShown: true,
        }}
        initialRouteName="Home"
        detachInactiveScreens={true}>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen
            name="ColorPalette"
            component={ColorPalette}
            options={({route}) => ({
              // @ts-expect-error
              title: route.params?.paletteName,
              // headerLeft: () => (
              //   <TouchableOpacity onPress={() => Alert.alert('John')}>
              //     <Switch
              //       trackColor={{false: '#dc322f', true: 'green'}}
              //       thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              //       ios_backgroundColor="#dc322f"
              //       onValueChange={toggleSwitch}
              //       value={isEnabled}
              //     />
              //   </TouchableOpacity>
              // ),
              // headerRight: () => (
              //   <TouchableOpacity onPress={() => Alert.alert('John')}>
              //     <Switch
              //       trackColor={{false: '#dc322f', true: 'green'}}
              //       thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              //       ios_backgroundColor="#dc322f"
              //       onValueChange={toggleSwitch}
              //       value={isEnabled}
              //     />
              //   </TouchableOpacity>
              // ),
              // headerStyle: {backgroundColor: 'papayawhip'},
              // headerLeftContainerStyle: {color: 'teal'},
            })}
          />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: 'modal',
            headerShown: false,
            animationEnabled: true,
          }}>
          <RootStack.Screen name="MyModal" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
