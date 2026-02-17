import { useEffect } from 'react';
import { Playwire } from '@intergi/react-native-playwire-sdk';

export function RewardedScreen({ route }: any) {
  const adUnitName: string | undefined = route?.params?.adUnitName;

  useEffect(() => {
    if (adUnitName) {
      Playwire.addRewardedLoadedEventListener(() => {
        Playwire.showRewarded(adUnitName);
      });
      Playwire.loadRewarded(adUnitName);
    }
  }, [adUnitName]);

  return null;
}
