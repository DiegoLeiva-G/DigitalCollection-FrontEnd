import { createContext, type FC, type ReactNode, useContext, useState } from 'react';

interface IUserData {
  id: string;
  name: string;
}

interface UserContextType {
  userData: IUserData | null;
  setUserData: (userData: IUserData | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
