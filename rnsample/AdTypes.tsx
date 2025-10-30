import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { Playwire, Size } from '@intergi/react-native-playwire-sdk';
import { useNavigation } from '@react-navigation/native';

export function AdTypesScreen() {
  const [isInitialized, setIsInitialized] = useState(false);
  const navigation = useNavigation();

  const initializeSDK = useCallback(() => {
    if (isInitialized) {
      return;
    }

    const publisherId = '1024407';
    const appId = Platform.OS === 'ios' ? '702' : '703';

    if (__DEV__) {
      Playwire.startConsoleLogger();
      Playwire.setTest(true);
    }

    // const globalTargeting = new PlaywireTargeting().add({
    //     'global_key': 'global_value'
    // })
    // Playwire.setGlobalTargeting(globalTargeting)

    console.log('Playwire SDK Initializing');
    Playwire.initializeSDK(publisherId, appId, () => {
      console.log('Playwire SDK Initialization complete');
      setIsInitialized(true);
    });
  }, [isInitialized]);

  // const navigation = useNavigation();

  const showAdUnit = useCallback(
    (adUnitName: string) => {
      if (adUnitName.includes('app-open')) {
        // @ts-ignore
        navigation.navigate('AppOpen' as never, { adUnitName } as never);
      } else if (adUnitName.includes('banner')) {
        let size: Size;
        if (adUnitName.includes('300x250')) {
          size = { width: 300, height: 250 };
        } else {
          size = { width: 320, height: 50 };
        }

        // @ts-ignore
        navigation.navigate('Banner' as never, { adUnitName, size } as never);
      } else if (adUnitName.includes('interstitial')) {
        // @ts-ignore
        navigation.navigate('Interstitial' as never, { adUnitName } as never);
      } else if (adUnitName.includes('native')) {
        // @ts-ignore
        navigation.navigate('Native' as never, { adUnitName } as never);
      } else if (adUnitName.includes('rewarded')) {
        // @ts-ignore
        navigation.navigate('Rewarded' as never, { adUnitName } as never);
      }
    },
    [navigation],
  );

  useEffect(() => {
    initializeSDK();
  }, [initializeSDK]);

  if (!isInitialized) return null;

  return (
    <FlatList
      style={styles.container}
      data={[
        { key: 'App Open - GAM', adUnitName: 'app-open-gam' },
        { key: 'App Open - MAX', adUnitName: 'app-open-max' },
        { key: 'Banner 320x50 - GAM', adUnitName: 'banner-320x50-gam' },
        { key: 'Banner 320x50 - MAX', adUnitName: 'banner-320x50-max' },
        { key: 'Banner 300x250 - GAM', adUnitName: 'banner-300x250-gam' },
        { key: 'Banner 300x250 - MAX', adUnitName: 'banner-300x250-max' },
        { key: 'Interstitial - GAM', adUnitName: 'interstitial-gam' },
        { key: 'Interstitial - MAX', adUnitName: 'interstitial-max' },
        // { key: 'Native - GAM', adUnitName: 'native-gam' },
        // { key: 'Native - MAX', adUnitName: 'native-max' },
        {
          key: 'Rewarded - GAM',
          adUnitName:
            Platform.OS === 'ios' ? 'rewarded-video-gam' : 'rewarded-gam',
        },
        { key: 'Rewarded - MAX', adUnitName: 'rewarded-video-max' },
      ]}
      renderItem={({ item }) => {
        return (
          <TouchableHighlight onPress={() => showAdUnit(item.adUnitName)}>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableHighlight>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  item: {
    padding: 12,
    margin: 2,
    fontSize: 18,
    width: '100%',
    color: '#000000',
    backgroundColor: '#ffffff',
  },
});
