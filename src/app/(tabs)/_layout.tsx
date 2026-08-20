import { Tabs } from 'expo-router/js-tabs';

import { MediMindTabBar } from '@/components/medimind/tab-bar';

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <MediMindTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="reports" />
      <Tabs.Screen name="bookings" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
