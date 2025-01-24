import api from "../../api";
export interface IUser {
  nome?: string
  email?: string
  password?: string
}
export interface IResponseUser {
  user: {
    nome: string
    email: string
    id: number
  }
  token: string
}
class UserData {
  register(data: IUser) {
    return api.post<IResponseUser>('/user/register', data)
  }
  login(data: IUser) {
    return api.post<IResponseUser>('/user/login', data)
  }
  index() {
    return api.get('/user')
  }
  show(id: number) {
    return api.get(`/user/${id}`)
  }
  destroy(id: number) {
    return api.delete(`/user/${id}`)
  }
}
export default new UserData()