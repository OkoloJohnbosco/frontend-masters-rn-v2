import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {PaletteProps} from '../types';

const PalettePreview = ({
  handlePress,
  palette,
}: {
  handlePress: () => void;
  palette: PaletteProps;
}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={styles.list}
        data={palette.colors.slice(0, 5)}
        renderItem={({item}) => (
          <View
            style={[
              styles.box,
              {
                backgroundColor: item.hexCode,
              },
            ]}
          />
        )}
        keyExtractor={item => item.hexCode}
        // ListHeaderComponent={<Text style={styles.big}>Shalom Taiwo</Text>}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  box: {
    height: 60,
    width: 60,
    marginRight: 10,
    shadowColor: '#00000066',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  list: {paddingVertical: 10},
});
export default PalettePreview;
