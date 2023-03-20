import { useEffect, useState, createContext, ReactNode } from "react";

import { api } from "@lib/axios";

import { IProfileProps } from "@interfaces/IProfileProps";
import { IRepoProps } from "@interfaces/IRepoProps";

interface IProfileContextProps {
  data: IProfileProps;
  repositories: IRepoProps[];
  loading: boolean;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as IProfileContextProps);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [data, setData] = useState<IProfileProps>({} as IProfileProps);
  const [repositories, setRepositories] = useState<IRepoProps[]>([]);
  const [loading, setLoading] = useState(true);

  const username = "murilojssilva";

  async function fetchProfile() {
    const response = await api.get(`/users/${username}`);
    setData(response.data);
  }

  async function fetchPosts() {
    setLoading(true);
    const responsePosts = await api.get(`/users/${username}/repos`, {
      params: { sort: "pushed", direction: "desc" },
    });
    setRepositories(responsePosts.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProfile();
    fetchPosts();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        data,
        repositories,
        loading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
