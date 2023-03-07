import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ColorBox from '../components/color-box';

const ColorPalette = ({route}: {route: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={route.params.colors}
        renderItem={({item}) => <ColorBox {...item} />}
        keyExtractor={item => item.colorName}
        // ListHeaderComponent={<Text style={styles.big}>Shalom Taiwo</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 20,
  },
  big: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});

export default ColorPalette;
