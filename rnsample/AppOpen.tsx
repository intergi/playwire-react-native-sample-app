import { useEffect } from 'react';
import { Playwire } from '@intergi/react-native-playwire-sdk';

export interface AdUnitProps {
  adUnitName: string;
}

export function AppOpenScreen({ route }: any) {
  const adUnitName: string | undefined = route?.params?.adUnitName;

  useEffect(() => {
    if (adUnitName) {
      Playwire.addAppOpenAdLoadedEventListener(() => {
        Playwire.showAppOpenAd(adUnitName);
      });
      Playwire.loadAppOpenAd(adUnitName);
    }
  }, [adUnitName]);

  return null;
}
