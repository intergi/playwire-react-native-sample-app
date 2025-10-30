import { useEffect } from 'react';
import { Playwire } from '@intergi/react-native-playwire-sdk';

export interface AdUnitProps {
  adUnitName: string;
}

export function AppOpenScreen({ route }: any) {
  const adUnitName: string | undefined = route?.params?.adUnitName;

  useEffect(() => {
    if (adUnitName) {
      Playwire.getAppOpenAdReady(adUnitName, isReady => {
        if (isReady) {
          Playwire.showAppOpenAd(adUnitName);
        }
      });
      Playwire.loadRewarded(adUnitName);
    }
  }, [adUnitName]);

  return null;
}
