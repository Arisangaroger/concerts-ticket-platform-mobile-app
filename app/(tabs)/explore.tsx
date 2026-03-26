import { View, Text, FlatList } from 'react-native';
import { concerts } from '../../data/concerts';
import ConcertCard from '../../components/ConcertCard';
import { useRouter } from 'expo-router';

export default function Explore() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-50">
      <Text className="text-2xl font-bold p-4">Discover new Concerts</Text>
      <FlatList
        data={concerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ConcertCard
            item={item}
            onPress={() => router.push({ pathname: '/details', params: { id: item.id } })}
          />
        )}
      />
    </View>
  );
}
