import React, {createContext, ReactNode, useContext, useState} from 'react';

interface AuthContextData {
  isSignedIn: boolean;
  logIn: () => void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: {children: ReactNode}): JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState(false);
  function logIn(): void {
    setIsSignedIn(true);
  }
  return (
    <AuthContext.Provider value={{isSignedIn, logIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
