import { View, Text, FlatList } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useStore } from '../store/useStore';
import { useRouter } from 'expo-router';

export default function Checkout() {
  const cart = useStore((state) => state.cart);
  const purchase = useStore((state) => state.purchase);
  const router = useRouter();

  const total = cart.reduce((sum, c) => sum + (c.price * (c.qty || 1)), 0);

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold">Checkout</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, idx) => item.id + idx}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl p-3 my-2">
            <Text className="font-semibold">{item.artist}</Text>
            <Text className="text-gray-500">{item.date} • {item.location}</Text>
            <Text className="text-primary font-bold">${item.price}</Text>
          </View>
        )}
      />
      <Text className="text-lg font-bold mt-4">Total: ${total}</Text>
      <PrimaryButton
        onPress={() => {
          purchase();
          router.push('/tabs/tickets');
        }}
      >
        Confirm Purchase
      </PrimaryButton>
    </View>
  );
}
