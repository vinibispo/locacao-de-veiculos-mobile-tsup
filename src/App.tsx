import React from 'react';
import Routes from './routes';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './utils/theme';
import Provider from './contexts';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Provider>
        <Routes />
      </Provider>
    </PaperProvider>
  );
}
