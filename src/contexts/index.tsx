import React, {ReactNode} from 'react';
import {AuthProvider} from './AuthContext';

export default function Provider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}
