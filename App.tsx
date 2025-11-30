// App.tsx (ریشه پروژه)
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { NativeWindStyleSheet } from 'nativewind';

// برای NativeWind در وب
NativeWindStyleSheet.setOutput({
  default: "native",
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      {/* Expo Router خودش همه چیز رو هندل می‌کنه */}
    </QueryClientProvider>
  );
}