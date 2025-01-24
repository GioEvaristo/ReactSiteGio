import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { SSection } from "./styles";
import { useAuth } from "../../hooks/authHook";
import { AxiosError } from "axios";
import { IUser } from "../../services/data/User";
import Loading from "../../components/Loading";
export function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IUser>({
    email: '',
    password: '',
  })
  async function handleChange(e: IUser) {
    setFormData((state: IUser | undefined) => ({ ...state, ...e }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (formData.email && formData.password) {
      try {
        setIsLoading(true)
        const { email, password } = formData
        await signIn({
          email: String(email),
          password: String(password),
        })
        toast.success("Login realizado com sucesso!");
        setIsLoading(false)
        navigate('/adm')
      } catch (error) {
        const err = error as AxiosError
        console.log(err.response?.data)
        toast.error("Falha ao fazer login!");
      } finally {
        setIsLoading(false)
      }
    } else {
      toast.error("Preencha todos os campos!")
    }
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <SSection>
      <h1>Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <div>
          <MdEmail />
          <input type="email" name="email" id="email" placeholder="E-mail"
            onChange={(e) => handleChange({ email: e.target.value })}
            value={formData?.email}
          />
        </div>
        <label htmlFor="senha">Senha</label>
        <div>
          <FaKey />
          <input type="password" name="senha" id="senha" placeholder="Senha"
            onChange={(e) => handleChange({ password: e.target.value })}
            value={formData?.password}
          />
        </div>
        <p>
          Não possui conta? <Link to="/cadastrar">Cadastre-se</Link>
          <button type="submit">Entrar</button>
        </p>
      </form>
    </SSection>
  );
};