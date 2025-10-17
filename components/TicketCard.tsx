import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Ticket } from '../types/concert';

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <View className="bg-white rounded-2xl p-4 my-2">
      <Text className="text-lg font-bold">{ticket.artist}</Text>
      <Text className="text-gray-500">{ticket.date} • {ticket.location}</Text>
      <Text className="text-xs text-gray-400 mt-1">Purchased: {new Date(ticket.purchasedAt).toLocaleString()}</Text>
      <QRCode value={ticket.ticketId} size={100} className="mt-2" />
    </View>
  );
}
