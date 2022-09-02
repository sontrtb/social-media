import { useRouter } from "next/router";
import { login } from "@app/redux/slices/UserSlice";
import { useAppDispatch } from "@app/hooks";

function Login() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        token: "123",
      })
    );

    router.push("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
