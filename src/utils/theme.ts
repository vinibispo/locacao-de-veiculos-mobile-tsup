import {DefaultTheme} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'yellow',
  },
};

export default theme;
