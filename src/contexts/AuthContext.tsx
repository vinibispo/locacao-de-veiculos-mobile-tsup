import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
        AsyncStorage.setItem(
          '@LocacaoVeiculos:user',
          JSON.stringify(res.data.user),
        );
      });
  }
  useEffect(() => {
    (async () => {
      try {
        const userStringfied = await AsyncStorage.getItem(
          '@LocacaoVeiculos:user',
        );
        if (userStringfied) {
          setUser(JSON.parse(userStringfied));
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const isSignedIn = useMemo(() => !!user, [user]);
  return (
    <AuthContext.Provider value={{isSignedIn, logIn, user}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
