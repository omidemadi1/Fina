import React, { useState } from 'react'
import { Modal, View, Text, TextInput, Pressable } from 'react-native'
import useAppStore from '../shared/store/useAppStore'

export default function AddAccountModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('0')
  const addAccount = useAppStore((s) => s.addAccount)

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', padding: 24 }}>
        <View style={{ backgroundColor: '#fff', borderRadius: 12, padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '700' }}>Add Account</Text>
          <TextInput placeholder="Name" value={name} onChangeText={setName} style={{ borderBottomWidth: 1, marginTop: 12 }} />
          <TextInput
            placeholder="Initial Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            style={{ borderBottomWidth: 1, marginTop: 12 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16 }}>
            <Pressable onPress={onClose} style={{ marginRight: 12 }}>
              <Text>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                addAccount(name || 'Account', parseFloat(amount || '0'))
                onClose()
              }}
            >
              <Text style={{ fontWeight: '700' }}>Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}
