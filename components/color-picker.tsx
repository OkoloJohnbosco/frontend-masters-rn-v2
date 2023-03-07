import {View, Text, StyleSheet, Switch} from 'react-native';
import React from 'react';
import {ColorBoxProps} from '../types';

const ColorPicker = (data: ColorBoxProps) => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(false);

  const toggleSwitch = () => setIsEnabled(prev => !prev);
  return (
    <View style={styles.picker}>
      <Text style={styles.pickerText}>{data.colorName}</Text>
      <Switch
        trackColor={{false: '#aaa', true: 'green'}}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#aaa"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingBottom: 10,
    marginBottom: 14,
  },
  pickerText: {
    fontSize: 16,
  },
});
export default ColorPicker;
