import React from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'
import { Filter } from 'lucide-react-native'
import useAppStore from '../../shared/store/useAppStore'

export default function AssetsScreen() {
  const livePrices = useAppStore((s) => s.livePrices)
  const myAssets = useAppStore((s) => s.assets)

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Live Prices</Text>
        <Pressable onPress={() => {}}>
          <Filter width={22} height={22} />
        </Pressable>
      </View>

      <FlatList
        data={livePrices}
        keyExtractor={(i) => i.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 8, padding: 12, backgroundColor: '#fff', borderRadius: 8 }}>
            <Text style={{ fontWeight: '600' }}>{item.symbol}</Text>
            <Text style={{ marginTop: 8 }}>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>My Assets</Text>
        <FlatList
          data={myAssets}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <View style={{ padding: 12, marginTop: 8, backgroundColor: '#fff', borderRadius: 8 }}>
              <Text style={{ fontWeight: '600' }}>{item.name}</Text>
              <Text>{(item.quantity * (item.livePrice ?? 0)).toFixed(2)}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
