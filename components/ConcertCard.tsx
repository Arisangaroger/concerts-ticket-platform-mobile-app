import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Concert } from '../types/concert';

export default function ConcertCard({ item, onPress }: { item: Concert; onPress: () => void }) {
  return (
    <TouchableOpacity className="bg-white rounded-2xl shadow-md m-3 p-3" onPress={onPress}>
      <Image source={{ uri: item.image }} className="h-40 w-full rounded-xl" />
      <Text className="text-lg font-bold mt-2">{item.artist}</Text>
      <Text className="text-gray-500">{item.date} • {item.location}</Text>
      <Text className="text-primary font-bold mt-1">${item.price}</Text>
    </TouchableOpacity>
  );
}

 