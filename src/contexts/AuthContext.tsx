import React, {createContext, ReactNode, useContext, useState} from 'react';
import api from '../services/api';
import {User} from '../utils/types';

interface LoginParams {
  email: string;
  senha: string;
}

interface AuthContextData {
  isSignedIn: boolean;
  logIn: ({email, senha}: LoginParams) => Promise<void>;
  user: User;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: {children: ReactNode}): JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({} as User);
  async function logIn({email, senha}: LoginParams): Promise<void> {
    api
      .post('/login', {
        usuario: {
          email,
          senha,
        },
      })
      .then((res) => {
        setUser(res.data.user);
        setIsSignedIn(true);
      });
  }
  return (
    <AuthContext.Provider value={{isSignedIn, logIn, user}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
