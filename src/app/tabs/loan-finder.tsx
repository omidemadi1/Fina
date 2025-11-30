import React from 'react'
import { View, Text, FlatList } from 'react-native'
import useAppStore from '../../shared/store/useAppStore'

export default function LoanFinderScreen() {
  const loans = useAppStore((s) => s.loans)

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>Loan Finder</Text>
      <FlatList
        data={loans}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={{ padding: 12, marginTop: 12, backgroundColor: '#fff', borderRadius: 8 }}>
            <Text style={{ fontWeight: '700' }}>{item.bankName}</Text>
            <Text>{item.amount}</Text>
            <Text numberOfLines={3} style={{ marginTop: 6 }}>{item.conditions}</Text>
          </View>
        )}
      />
    </View>
  )
}
