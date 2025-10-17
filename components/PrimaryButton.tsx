import { TouchableOpacity, Text } from 'react-native';

export default function PrimaryButton({ children, onPress }: { children: React.ReactNode; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} className="bg-primary p-4 rounded-2xl mt-4">
      <Text className="text-white text-center font-semibold">{children}</Text>
    </TouchableOpacity>
  );
}
