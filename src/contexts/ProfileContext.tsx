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

interface IRepoProps {
  pushed_at: Date;
  name: string;
  html_url: string;
  language: string;
  languages_url: {};
  id: number;
}

interface IProfileContextProps {
  data: IProfileProps;
  repositories: IRepoProps[];
}

export const ProfileContext = createContext({} as IProfileContextProps);

interface ProfileProviderProps {
  children: ReactNode;
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [data, setData] = useState<IProfileProps>({} as IProfileProps);
  const [repositories, setRepositories] = useState<IRepoProps[]>([]);

  const username = "murilojssilva";

  async function fetchProfile() {
    const response = await api.get(`/users/${username}`);
    setData(response.data);
  }

  async function fetchPosts() {
    const responsePosts = await api.get(`/users/${username}/repos`, {
      params: { sort: "pushed", direction: "desc" },
    });
    setRepositories(responsePosts.data);
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
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
