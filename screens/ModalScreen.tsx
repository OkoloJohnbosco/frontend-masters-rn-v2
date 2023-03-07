import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import ColorPicker from '../components/color-picker';
import {ColorBoxProps} from '../types';
import {useNavigation} from '@react-navigation/native';

const COLORS: ColorBoxProps[] = [
  {colorName: 'AliceBlue', hexCode: '#F0F8FF'},
  {colorName: 'AntiqueWhite', hexCode: '#FAEBD7'},
  {colorName: 'Aqua', hexCode: '#00FFFF'},
  {colorName: 'Aquamarine', hexCode: '#7FFFD4'},
  {colorName: 'Azure', hexCode: '#F0FFFF'},
  {colorName: 'Beige', hexCode: '#F5F5DC'},
  {colorName: 'Bisque', hexCode: '#FFE4C4'},
  {colorName: 'Black', hexCode: '#000000'},
  {colorName: 'BlanchedAlmond', hexCode: '#FFEBCD'},
  {colorName: 'Blue', hexCode: '#0000FF'},
  {colorName: 'BlueViolet', hexCode: '#8A2BE2'},
  {colorName: 'Brown', hexCode: '#A52A2A'},
  {colorName: 'BurlyWood', hexCode: '#DEB887'},
  {colorName: 'CadetBlue', hexCode: '#5F9EA0'},
  {colorName: 'Chartreuse', hexCode: '#7FFF00'},
  {colorName: 'Chocolate', hexCode: '#D2691E'},
  {colorName: 'Coral', hexCode: '#FF7F50'},
  {colorName: 'CornflowerBlue', hexCode: '#6495ED'},
  {colorName: 'Cornsilk', hexCode: '#FFF8DC'},
  {colorName: 'Crimson', hexCode: '#DC143C'},
  {colorName: 'Cyan', hexCode: '#00FFFF'},
];

const ModalScreen = () => {
  const [paletteName, setPaletteName] = React.useState<string>('');
  const [colors, setColors] = React.useState<ColorBoxProps[]>([]);
  const navigation = useNavigation();

  const handleSubmitPalette = () => {
    if (!paletteName) {
      Alert.alert('Please input the name of your palette');
      return;
    }
    if (colors.length <= 2) {
      Alert.alert('Please add at least 3 colors to your palatte');
      return;
    }
    const newPalette = [
      {
        paletteName,
        colors,
      },
    ];
    // @ts-expect-error
    navigation.navigate('Home', newPalette);
  };
  return (
    <View style={styles.container}>
      <View style={styles.formControl}>
        <Text style={styles.label}>Name of your color Palette</Text>
        <TextInput
          style={styles.input}
          value={paletteName}
          onChangeText={text => setPaletteName(text)}
          placeholder="Enter palette name"
        />
      </View>
      <FlatList
        style={styles.list}
        data={COLORS}
        renderItem={({item}) => (
          <ColorPicker colors={colors} setColors={setColors} {...item} />
        )}
        keyExtractor={item => item.colorName}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={handleSubmitPalette}>
          <Text style={styles.btnText}>Create Palette</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'white',
    position: 'relative',
  },
  list: {
    padding: 14,
    marginBottom: 0,
  },
  formControl: {
    marginBottom: 15,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  input: {
    height: 46,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 18,
  },
  btnContainer: {
    // backgroundColor: 'rgba(25, 155, 255, 0.1)',
    alignItems: 'center',
    position: 'relative',
    bottom: -20,
    height: 'auto',
  },
  btn: {
    width: '90%',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'teal',
    borderRadius: 10,
    marginBottom: 50,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ModalScreen;
