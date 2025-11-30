import React from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'
import { Stack } from 'expo-router'
import { Search } from 'lucide-react-native'
import useAppStore from '../../shared/store/useAppStore'

export default function HomeScreen() {
  const accounts = useAppStore((s) => s.accounts)

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: '700' }}>Total Balance</Text>
        <Pressable onPress={() => {}}>
          <Search width={24} height={24} />
        </Pressable>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>My Accounts</Text>
        <FlatList
          data={accounts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ padding: 12, borderRadius: 8, backgroundColor: '#fff', marginTop: 8 }}>
              <Text style={{ fontWeight: '600' }}>{item.name}</Text>
              <Text>{item.balance.toFixed(2)}</Text>
            </View>
          )}
        />
      </View>

      <View style={{ marginTop: 24 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Today</Text>
        <Text style={{ marginTop: 8, color: '#666' }}>No obligations for today</Text>
      </View>
    </View>
  )
}
