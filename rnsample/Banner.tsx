import { PlaywireBannerView, Size } from '@intergi/react-native-playwire-sdk';
import { AdUnitProps } from './AppOpen.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface BannerScreenProps extends AdUnitProps {
  size: Size;
}

export function BannerScreen({ route }: any) {
  const adUnitName: string | undefined = route?.params?.adUnitName;
  const size: Size | undefined = route?.params?.size;

  if (!adUnitName || !size) {
    return null;
  }

  return (
    <SafeAreaView>
      <PlaywireBannerView adUnitId={adUnitName} size={size} />
    </SafeAreaView>
  );
}
