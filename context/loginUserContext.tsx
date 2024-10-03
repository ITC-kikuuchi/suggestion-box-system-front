'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// ユーザーの型定義
type User = {
  id: number;
  unknown: string;
};

// ログインユーザーコンテキストの型定義
type LoginUserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

// コンテキストを作成
const LoginUserContext = createContext<LoginUserContextType | undefined>(undefined);

// UserProviderコンポーネント
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // ユーザーの状態を管理するためのuseState
  const [user, setUser] = useState<User | null>(null);
  // コンテキストの値を定義します。
  const value = {
    user,
    setUser,
  };

  return (
    <LoginUserContext.Provider value={value}>
      {children}
    </LoginUserContext.Provider>
  );
};

// useUserカスタムフックを定義し、コンテキストの値を取得
export const useUser = (): LoginUserContextType => {
  const context = useContext(LoginUserContext);
  if (context === undefined) {
    throw new Error('useUserはUserProviderの中で使用する必要があります');
  }
  return context;
};
