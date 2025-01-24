import React, { createContext, useState, useCallback, ReactNode } from 'react'
import api from '../services/api'
import { apiUser } from '../services/data'
import { useNavigate } from 'react-router-dom'
import { IResponseUser, IUser } from '../services/data/User'
export interface IAuthContextData {
  signIn(credentials: IUser): Promise<void>
  signOut(): Promise<void>
  loadUserStorageData(): Promise<boolean>
  user: {
    id: number
    email: string
    nome: string
  }
}
export interface IAuthProvider {
  children?: ReactNode
}
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)
const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [auth, setAuth] = useState<IResponseUser>({} as IResponseUser)
  const navigate = useNavigate();
  const signIn = useCallback(async ({ email, password }: IUser) => {
    const response = await apiUser.login({ email, password })
    const { token, user } = response.data
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setAuth({ token, user })
    localStorage.setItem('@web1:token', JSON.stringify(token))
    localStorage.setItem('@web1:user', JSON.stringify(user))
  }, [])
  const removeLocalStorage = useCallback(async () => {
    localStorage.removeItem('@web1:token')
    localStorage.removeItem('@web1:user')
  }, [])
  const signOut = useCallback(async () => {
    setAuth({} as IResponseUser)
    await removeLocalStorage()
    delete api.defaults.headers.common.Authorization
    navigate('/login')
  }, [removeLocalStorage, navigate])
  const loadUserStorageData = useCallback(async () => {
    const token = JSON.parse(String(localStorage.getItem('@web1:token')))
    const user = JSON.parse(String(localStorage.getItem('@web1:user')))
    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token.token}`
      setAuth({ token, user })
      return true
    } else {
      return false
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        loadUserStorageData,
        user: auth.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export { AuthProvider, AuthContext }