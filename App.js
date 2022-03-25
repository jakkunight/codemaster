import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { extendTheme, NativeBaseProvider, Box } from 'native-base';
import Notice from './components/notice';

const theme = extendTheme({
  fontConfig: {
    JetBrainsMono: {
      100: {
        normal: 'JetBrainsMono-Thin',
        italic: 'JetBrainsMono-ThinItalic'
      },
      200: {
        normal: 'JetBrainsMono-Regular',
        italic: 'JetBrainsMono-Italic'
      },
      300: {
        normal: 'JetBrainsMono-ExtraLight',
        italic: 'JetBrainsMono-ExtraLightItalic'
      },
      400: {
        normal: 'JetBrainsMono-Light',
        italic: 'JetBrainsMono-LightItalic'
      },
      500: {
        normal: 'JetBrainsMono-Medium',
        italic: 'JetBrainsMono-MediumItalic'
      },
      600: {
        normal: 'JetBrainsMono-SemiBold',
        italic: 'JetBrainsMono-SemiBoldItalic'
      },
      700: {
        normal: 'JetBrainsMono-Bold',
        italic: 'JetBrainsMono-BoldItalic'
      },
      800: {
        normal: 'JetBrainsMono-ExtraBold',
        italic: 'JetBrainsMono-ExtraBoldItalic'
      }
    }
  },
  fonts: {
    heading: 'JetBrainsMono',
    body: 'JetBrainsMono',
    mono: 'JetBrainsMono'
  }
});

export const App = () => {

  let [fontsLoaded] = useFonts({
    'JetBrainsMono-Bold': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-Bold.ttf'),
    'JetBrainsMono-BoldItalic': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-BoldItalic.ttf'),
    'JetBrainsMono-ExtraBold': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-ExtraBold.ttf'),
    'JetBrainsMono-ExtraBoldItalic': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-ExtraBoldItalic.ttf'),
    'JetBrainsMono-ExtraLight': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-ExtraLight.ttf'),
    'JetBrainsMono-ExtraLightItalic': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-ExtraLightItalic.ttf'),
    'JetBrainsMono-Italic': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-Italic.ttf'),
    'JetBrainsMono-Light': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-Light.ttf'),
    'JetBrainsMono-LightItalic': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-LightItalic.ttf'),
    'JetBrainsMono-Medium': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-Medium.ttf'),
    'JetBrainsMono-MediumItalic': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-MediumItalic.ttf'),
    'JetBrainsMono-Regular': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-Regular.ttf'),
    'JetBrainsMono-SemiBold': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-SemiBold.ttf'),
    'JetBrainsMono-SemiBoldItalic': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-SemiBoldItalic.ttf'),
    'JetBrainsMono-Thin': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-Thin.ttf'),
    'JetBrainsMono-ThinItalic': require('./assets/fonts/JetBrains_Mono/static/JetBrainsMono-ThinItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={theme} >
      <Box size="100%" bgColor="black" >
        <Notice title={"FINALY ONLINE!!! - The WebPage Creation."} paragraph={"Thanks you so much for the cheering up!"} />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
