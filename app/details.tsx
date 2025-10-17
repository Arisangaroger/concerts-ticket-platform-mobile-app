import { View, Text, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useSearchParams, useRouter } from 'expo-router';
import { concerts } from '../data/concerts';
import { useStore } from '../store/useStore';

export default function Details() {
  const { id } = useSearchParams<{ id: string }>();
  const router = useRouter();
  const addToCart = useStore((state) => state.addToCart);

  const concert = concerts.find((c) => c.id === id);
  if (!concert) return <Text>Concert not found</Text>;

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Image source={{ uri: concert.image }} className="h-56 w-full rounded-2xl" />
      <Text className="text-2xl font-bold mt-4">{concert.artist}</Text>
      <Text className="text-gray-500">{concert.date} • {concert.location}</Text>
      <Text className="mt-4 text-base">{concert.description}</Text>
      <Text className="text-primary font-bold text-xl mt-4">${concert.price}</Text>
      <PrimaryButton
        onPress={() => {
          addToCart(concert);
          router.push('/checkout');
        }}
      >
        Buy Ticket
      </PrimaryButton>
    </View>
  );
}
