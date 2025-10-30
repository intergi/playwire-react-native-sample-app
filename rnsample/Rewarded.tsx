import { useEffect } from 'react';
import { Playwire } from '@intergi/react-native-playwire-sdk';

export function RewardedScreen({ route }: any) {
  const adUnitName: string | undefined = route?.params?.adUnitName;

  useEffect(() => {
    if (adUnitName) {
      Playwire.showRewarded(adUnitName);
    }
  }, [adUnitName]);

  return null;
}
