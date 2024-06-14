import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useFetch from '@/hooks/useFetch';

export function Card({data = null, navigation}) {

   console.log(data)
   

   function handleClick(){
    navigation.navigate("Details", {name: data?.url})
    }

    const { list, loading, error } = useFetch();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style = {styles.container} onPress={handleClick}>
          <Text style={styles.text}>prueba</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: "blue",
    height: 50,
    width: 100,
    margin: 5,
    borderCurve:'circular',
    borderRadius: 10,
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    color: '#fff',
  },
});
