import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { SSection } from "./styles";
import { AxiosError } from "axios";
import { apiUser } from "../../services/data";
import { IUser } from "../../services/data/User";
import Loading from "../../components/Loading";
export function Cadastrar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IUser>({
    nome: '',
    email: '',
    password: '',
  })
  async function handleChange(e: IUser) {
    setFormData((state: IUser | undefined) => ({ ...state, ...e }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (formData.email && formData.nome && formData.password) {
      try {
        setIsLoading(true)
        await apiUser.register(formData);
        toast.success("Cadastro realizado com sucesso!");
        navigate('/login')
      } catch (error) {
        const err = error as AxiosError
        console.log(err.response?.data)
        toast.error("Falha ao cadastrar!");
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
      <h1>Cadastre-se</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <div>
          <BsFillPersonFill />
          <input type="text" name="name" id="nome" placeholder="Nome"
            onChange={(e) => handleChange({ nome: e.target.value })}
            value={formData?.nome}
          />
        </div>
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
          Já possui conta? <Link to="/login">Faça o login</Link>
          <button type="submit">Salvar</button>
        </p>
      </form>
    </SSection>
  );
};