import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdTypesScreen } from './AdTypes.tsx';
import { AppOpenScreen } from './AppOpen.tsx';
import { BannerScreen } from './Banner.tsx';
import { InterstitialScreen } from './Interstitial.tsx';
import { RewardedScreen } from './Rewarded.tsx';

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ad Types">
        <Stack.Screen name="Ad Types" component={AdTypesScreen} />
        <Stack.Screen name="AppOpen" component={AppOpenScreen} />
        <Stack.Screen name="Banner" component={BannerScreen} />
        <Stack.Screen name="Interstitial" component={InterstitialScreen} />
        <Stack.Screen name="Rewarded" component={RewardedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
