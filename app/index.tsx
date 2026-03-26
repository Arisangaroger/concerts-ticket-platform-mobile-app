import { View, Text, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useRouter } from 'expo-router';

export default function Onboarding() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-gray-50 p-6">
      <Image
        source={{ uri: 'https://placehold.co/300x300' }}
        className="h-48 w-48 mb-6 rounded-full"
      />
      <Text className="text-2xl font-bold text-center">Live concerts, easy tickets</Text>
      <Text className="text-gray-500 text-center mt-2">
        Discover events and buy tickets in seconds.
      </Text>
      <PrimaryButton onPress={() => router.replace('tabs/explore')}>
        Get Started
      </PrimaryButton>
    </View>
  );
}
