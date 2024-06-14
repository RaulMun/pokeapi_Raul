import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from './Card';



export function Home({navigation}) {

    const pageLimit = 10
    const [limit, setLimit ] = useState(pageLimit)
    const [offset, setOffset ] = useState(0)

    const {list, loading, error} = useFetch(limit, offset)
    useEffect(() => {
        console.log(list, loading, error?.message)
    }, [loading])

    function handleClick(){
        setLimit(limit + pageLimit)
    }

  return (
    <View onPress={handleClick}>
    {list.map((element) => (
      <Card key={element?.id} data={element} navigation={navigation} />
    ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
