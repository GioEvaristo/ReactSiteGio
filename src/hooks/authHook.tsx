import { AuthContext, IAuthContextData } from "../contexts/authContext"
import { useContext } from "react"
export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser utilizado com o AuthProvider')
  }
  return context
}