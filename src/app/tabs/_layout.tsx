import React from 'react'
import { Tabs } from 'expo-router'

export default function Layout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen name="home" options={{ href: '/tabs/home' }} />
			<Tabs.Screen name="reports" options={{ href: '/tabs/reports' }} />
			<Tabs.Screen name="assets" options={{ href: '/tabs/assets' }} />
			<Tabs.Screen name="loan-finder" options={{ href: '/tabs/loan-finder' }} />
		</Tabs>
	)
}
