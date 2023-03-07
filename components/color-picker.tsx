import {View, Text, StyleSheet, Switch} from 'react-native';
import React from 'react';
import {ColorBoxProps} from '../types';

const ColorPicker = (
  data: ColorBoxProps & {
    colors: ColorBoxProps[];
    setColors: React.Dispatch<React.SetStateAction<ColorBoxProps[]>>;
  },
) => {
  const {colorName, colors, hexCode, setColors} = data;
  const isAvailable = React.useMemo(
    () => colors.findIndex(color => color.colorName === colorName) >= 0,
    [colorName, colors],
  );

  const toggleSwitch = () => {
    if (!isAvailable) {
      setColors(prev => [...prev, {colorName, hexCode}]);
    } else {
      const newColors = colors.filter(color => color.colorName !== colorName);
      setColors(newColors);
    }
  };

  return (
    <View style={styles.picker}>
      <Text style={styles.pickerText}>{data.colorName}</Text>
      <Switch
        trackColor={{false: '#aaa', true: 'green'}}
        thumbColor={isAvailable ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#aaa"
        onValueChange={toggleSwitch}
        value={colors.findIndex(color => color.colorName === colorName) >= 0}
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
