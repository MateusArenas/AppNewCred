import { StyleSheet, FlatList, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <FlatList style={{ flex: 1 }}
        data={[{}, {}, {}]}
        renderItem={({ item }) => (
            <View style={[{  }]}>
                <Pressable 
                    onPress={() => navigation.navigate('ChatBot')}
                    style={({ pressed }) => [
                        { position: 'absolute', width: '100%', height: '100%', zIndex: 2 },
                        pressed && { backgroundColor: 'rgba(0,0,0,.1)' }
                    ]} 
                />
                <View style={[{ flexDirection: 'row', padding: 8, zIndex: 1 }]}>
                    <View style={[
                        { width: 60, height: 60, borderRadius: 60 },
                        { backgroundColor: 'blue' },
                        { alignSelf: 'center' },
                        { zIndex: 3 }
                    ]} />
                    <View style={[{ flex: 1, padding: 8 }]}>
                        <Text style={{ fontSize: 18 }}>Lorem ipsum</Text>
                        <Text style={{ fontSize: 14, width: '100%' }}>Lorem ipsum dolor sit amet consectetur </Text>
                    </View>
                    <View style={[{ padding: 8 }]}>
                        <Text style={{ fontSize: 12 }}>12/10/200</Text>
                    </View>
                </View>
                <View style={[styles.separator]} />
            </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 60, 
    height: 60, 
    borderRadius: 60,
    backgroundColor: 'blue',
    alignSelf: 'center',
    zIndex: 3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: 'black', 
    opacity: .2
  },
});
