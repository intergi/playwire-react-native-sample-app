import { useEffect } from 'react';
import { Playwire } from '@intergi/react-native-playwire-sdk';

export function InterstitialScreen({ route }: any) {
  const adUnitName: string | undefined = route?.params?.adUnitName;

  useEffect(() => {
    if (adUnitName) {
      Playwire.showInterstitial(adUnitName);
    }
  }, [adUnitName]);

  return null;
}
