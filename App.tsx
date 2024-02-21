import { TamaguiProvider } from '@tamagui/core';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Dashboard } from './Dashboard';
import config from './tamagui.config';

export default function App() {
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <Dashboard />
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}
