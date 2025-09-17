import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#53789E',
      },
      headerTintColor: '#92BAD2',
      headerShown: true,
      headerTitle: 'Primordial',
      headerTitleStyle: {
      fontWeight: 'bold',
      },
    }}>
   </Stack>
  );
}
