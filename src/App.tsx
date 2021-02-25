import React from 'react';
import Routes from './routes';
import {Provider, DefaultTheme} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <Provider theme={theme}>
      <Routes />
    </Provider>
  );
}
