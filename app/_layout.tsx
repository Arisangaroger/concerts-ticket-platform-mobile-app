import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4f46e5',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="tabs/explore" options={{ title: 'Discover' }} />
      <Tabs.Screen name="tabs/tickets" options={{ title: 'My Tickets' }} />
      <Tabs.Screen name="tabs/profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
