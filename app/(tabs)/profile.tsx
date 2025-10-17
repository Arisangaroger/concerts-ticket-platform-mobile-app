import { View, Text } from 'react-native';

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50">
      <Text className="text-2xl font-bold">Profile</Text>
      <Text className="text-gray-500 mt-2">User information and account settings will go here.</Text>
    </View>
  );
}
