import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

export default function ReportsScreen() {
  // Placeholder chart data — replace with real data
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      { data: [20, 45, 28, 80, 99, 43, 50], color: () => 'green' },
      { data: [30, 20, 50, 40, 60, 30, 20], color: () => 'red' },
    ],
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}>Reports</Text>
        <View style={{ flexDirection: 'row' }}>
          <Pressable style={{ marginHorizontal: 8 }}>
            <Text>Weekly</Text>
          </Pressable>
          <Pressable style={{ marginHorizontal: 8 }}>
            <Text>Monthly</Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 8, fontWeight: '600' }}>Income vs Expense</Text>
        <Text style={{ color: '#666' }}>Chart placeholder — install `react-native-chart-kit` to render</Text>
      </View>
    </View>
  )
}
