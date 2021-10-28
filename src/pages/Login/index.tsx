import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();
  const formSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const Login = (userData: UserData) => {
    signIn(userData);
  };

  const { register, handleSubmit } = useForm<UserData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <form className="InputsCamp" onSubmit={handleSubmit(Login)}>
      <input placeholder="Email" type="text" {...register("email")} />
      <input placeholder="Senha" type="password" {...register("password")} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Login;
