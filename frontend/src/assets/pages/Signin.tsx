import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user.api";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignup() {
    try {
      const result = await loginUser({ email, password });
      console.log("Backend response:", result);
      navigate("/home");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error:", err.message);
      } else {
        console.error("Unexpected error:", err);
      }
    }
  }

  return (
    <div className="min-h-screen flex bg-primary items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-8 md:px-24 lg:px-32 py-6 sm:py-12 flex flex-col justify-center bg-white shadow-xl rounded-md">
        <header className="flex flex-col items-center gap-13">
          <img
            src="/images/logo/scholarshelf-logo-blue.png"
            alt="scholarshelf logo"
            className="w-42"
          />
          <h1 className="font-inter text-2xl font-bold">Sign in</h1>
        </header>
        <div className="flex flex-col mt-8">
          <h1 className="font-inter font-bold text-xl">
            Welcome to ScholarShelf
          </h1>
          <p className="font-inter text-md">
            Hope we help you find your needs.
          </p>
        </div>
        <section className="py-4 mt-4">
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="font-regular text-red-600 text-right hover:underline cursor-pointer ">
            Forgot password?
          </p>
        </section>
        <div className="flex flex-col items-center mt-2">
          <Button
            text="Sign In"
            onClick={() => handleSignup()}
            className="w-44 h-10"
            textClassName="text-lg"
          />
          <p className="font-inter text-md mt-8">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-secondary font-bold cursor-pointer hover:underline"
            >
              Sign up
            </a>
            <span className="text-black font-regular"> now</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
