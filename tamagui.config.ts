import { config } from '@tamagui/config/v3';
import { createTamagui } from '@tamagui/core';
import { createMedia } from '@tamagui/react-native-media-driver';

const media = createMedia({
  mobile: { minWidth: 480 },
  tablet: { minWidth: 768 },
  small: { minWidth: 992 },
  large: { minWidth: 1024 },
  xl: { minWidth: 1200 },
});

const appConfig = createTamagui({
  ...config,
  media,
});

export type AppConfig = typeof appConfig;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
