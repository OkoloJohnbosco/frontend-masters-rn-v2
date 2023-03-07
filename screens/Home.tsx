import {SafeAreaView, StyleSheet, FlatList, Text, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PaletteProps} from '../types';
import PalettePreview from '../components/palette-preview';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({route}: {route: any}) => {
  const navigation = useNavigation();
  const [palettes, setPalettes] = React.useState<PaletteProps[]>([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handleFetchPalettes = React.useCallback(async () => {
    try {
      const response = await fetch(
        'https://color-palette-api.kadikraman.now.sh/palettes',
      );
      if (response.ok) {
        const palettesRes = await response.json();
        setPalettes(palettesRes);
      }
    } catch (err) {
      Alert.alert('Something went wrong');
    }
  }, []);

  React.useEffect(() => {
    handleFetchPalettes();
  }, [handleFetchPalettes]);

  React.useEffect(() => {
    if (route?.params) {
      const isAvailable = palettes.find(
        palette => palette.paletteName === route?.params?.paletteName,
      );
      !isAvailable &&
        setPalettes(prevPalettes => [route.params, ...prevPalettes]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route?.params]);

  const handleRefresh = React.useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setIsRefreshing(false);
  }, [handleFetchPalettes]);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        // @ts-expect-error
        onPress={() => navigation.navigate('MyModal')}
        style={styles.btn}>
        <Text style={styles.btnText}>Add Modal Palette Screen</Text>
      </TouchableOpacity>
      <FlatList
        // refreshControl={
        //   <RefreshControl
        //     refreshing={true}
        //     size={0.3}
        //     tintColor="teal"
        //     onRefresh={() => {}}
        //   />
        // }
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        style={styles.list}
        data={palettes}
        renderItem={({item}) => (
          <PalettePreview
            handlePress={() =>
              /* @ts-expect-error */
              navigation.navigate('ColorPalette', item)
            }
            palette={item}
          />
        )}
        keyExtractor={item => item.paletteName}
        // ListHeaderComponent={<Text style={styles.big}>Shalom Taiwo</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    padding: 10,
  },
  big: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    padding: 8,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'teal',
  },
});
export default Home;
