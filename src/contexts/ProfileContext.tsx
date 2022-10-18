import { useEffect, useState, createContext, ReactNode } from "react";

import { api } from "../lib/axios";

interface IProfileProps {
  name: string;
  bio: string;
  login: string;
  followers: number;
  company?: string;
  repos_url: string;
}

interface IProfileContextProps {
  data: IProfileProps;
}

export const ProfileContext = createContext({} as IProfileContextProps);

interface ProfileProviderProps {
  children: ReactNode;
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [data, setData] = useState<IProfileProps>({} as IProfileProps);

  const username = "murilojssilva";

  async function fetchProfile() {
    const response = await api.get(`/users/${username}`);
    setData(response.data);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
