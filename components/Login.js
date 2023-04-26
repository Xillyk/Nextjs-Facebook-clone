import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        alt="fb logo"
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
        onClick={signIn}
      >
        Login With Facebook
      </h1>
    </div>
  );
}

export default Login;
