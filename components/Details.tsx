import useFetchPoke from '@/hooks/useFetchPoke';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { View } from 'react-native';

export function Details({navigation, route}) {

    console.log(route?.params)
    function handleClick(){
        navigation.navigate('Home');
    }
    const {pokemon, loading, error} = useFetchPoke(route.params.name)

    useEffect(() => {
      console.log(pokemon, loading, error?.message)

    })

  return (
    <View style={styles.backContainer}>
      <TouchableOpacity onPress={handleClick}>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <Image source={{uri:pokemon?.sprites?.front_default}} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{pokemon?pokemon.name:null}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.text}>Pokedex entry #{pokemon?.order}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.text}>Type: {pokemon?.types?.map((type) => type.type.name).join(', ')}</Text>
            </View>
          </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
    },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height:'auto',
    width:'auto',
    },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'red',
    width: 'auto',
    borderCurve: 'circular',
    borderRadius: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    },
});
