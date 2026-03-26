import { View, Text, ScrollView } from 'react-native';
import { useStore } from '../../store/useStore';
import TicketCard from '../../components/TicketCard';

export default function Tickets() {
  const tickets = useStore((state) => state.tickets);

  if (tickets.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-gray-50">
        <Text className="text-gray-500">No tickets yet. Buy one from Discover tickets tab.</Text>
      </View>
    );
  }

  return (
    <ScrollView className="p-4 bg-gray-50">
      {tickets.map((t, i) => (
        <TicketCard key={i} ticket={t} />
      ))}
    </ScrollView>
  );
}
