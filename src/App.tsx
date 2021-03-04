import React from 'react';
import Routes from './routes';
import {Provider} from 'react-native-paper';
import theme from './utils/theme';

export default function App() {
  return (
    <Provider theme={theme}>
      <Routes />
    </Provider>
  );
}
