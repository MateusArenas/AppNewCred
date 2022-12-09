import { StyleSheet, FlatList, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <FlatList style={{ flex: 1 }}
        data={[{}, {}, {}]}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => (
            <View style={[{ flexShrink: 1 }]}>
                <Pressable 
                    onPress={() => navigation.navigate('ChatBot')}
                    style={({ pressed }) => [
                        { position: 'absolute', width: '100%', height: '100%', zIndex: 2 },
                        pressed && { backgroundColor: 'rgba(0,0,0,.1)' }
                    ]} 
                />
                <View style={{ flex: 1, paddingHorizontal: 12, zIndex: 1 }}>
                    <View style={[{ flexDirection: 'row', padding: 12 }]}>
                        <View style={[styles.avatar]} />
                        <View style={[{ flex: 1, padding: 8 }]}>
                            <Text style={[styles.title]}>Lorem ipsum</Text>
                            <Text numberOfLines={1} style={[styles.description]}>Lorem ipsum dolor sit amet consectetur </Text>
                        </View>
                        <View style={[{ padding: 8 }]}>
                            <Text style={{ fontSize: 12 }}>12/10/200</Text>
                        </View>
                    </View>
                    <View style={[styles.separator]} />
                </View>
            </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 2
  },
  description: {
    fontSize: 14,
    flex: 1,
  },
  separator: {
    height: 1,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: 'black', 
    opacity: .2
  },
});
