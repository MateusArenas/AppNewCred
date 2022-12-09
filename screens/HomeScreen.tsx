import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <FlatList style={{ flex: 1 }}
        data={[{}, {}, {}]}
        renderItem={({ item }) => (
            <View style={[{ paddingHorizontal: 12 }]}>
                <View style={[{ flexDirection: 'row', padding: 8 }]}>
                    <View style={[{ width: 60, height: 60, borderRadius: 60, backgroundColor: 'blue', alignSelf: 'center' }]} />
                    <View style={[{ flex: 1, padding: 8 }]}>
                        <Text style={{ fontSize: 18 }}>Lorem ipsum</Text>
                        <Text style={{ fontSize: 14, width: '100%' }}>Lorem ipsum dolor sit amet consectetur </Text>
                    </View>
                    <View style={[{ padding: 8 }]}>
                        <Text style={{ fontSize: 12 }}>12/10/200</Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: 'black', opacity: .1 }} />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
