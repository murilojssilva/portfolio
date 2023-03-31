import { useEffect, useState, createContext, ReactNode } from 'react'

import { api } from '@/lib/axios'

import { IProfileProps } from '@/interfaces/IProfileProps'
import { IRepoProps } from '@/interfaces/IRepoProps'

interface IProfileContextProps {
  data: IProfileProps
  repositories: IRepoProps[]
  readme: never[]
  loading: boolean
}

interface IProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as IProfileContextProps)

export function ProfileProvider({ children }: IProfileProviderProps) {
  const [data, setData] = useState<IProfileProps>({} as IProfileProps)
  const [repositories, setRepositories] = useState<IRepoProps[]>([])
  const [readme, setReadme] = useState([])
  const [loading, setLoading] = useState(true)

  const username = 'murilojssilva'

  async function fetchProfile() {
    const response = await api.get(`/users/${username}`)
    setData(response.data)
  }

  async function fetchPosts() {
    setLoading(true)
    const responsePosts = await api.get(`/users/${username}/repos`, {
      params: { sort: 'pushed', direction: 'desc' },
    })
    setRepositories(responsePosts.data)
    setLoading(false)
  }

  async function fetchReadMe() {
    const responseReadMe = await api.get(
      `https://raw.githubusercontent.com/${username}/${username}/main/README.md`
    )
    setReadme(responseReadMe.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    fetchReadMe()
  }, [])

  return (
    <ProfileContext.Provider
      value={{
        data,
        repositories,
        readme,
        loading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
