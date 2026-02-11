import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const { handleSignup, errorMessage, setErrorMessage } = useAuth();
  const navigate = useNavigate();

  async function onSubmit() {
    const result = await handleSignup({
      name,
      email,
      address,
      password,
      confirmpassword: confirmpass,
    });
    if (result) {
      navigate("/signin");
      console.log("Success", "Sign up successful!");
    }
  }

  return (
    <div className="min-h-screen flex bg-primary items-center justify-center">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-8 md:px-24 lg:px-32 py-6 sm:py-12 flex flex-col justify-center bg-white shadow-xl rounded-md">
        <header className="flex flex-col items-center gap-13">
          <img
            src="/images/logo/scholarshelf-logo-blue.png"
            alt="scholarshelf logo"
            className="w-43 "
          />
          <h1 className="font-inter text-2xl font-bold">Sign up</h1>
        </header>
        <div className="flex flex-col mt-8">
          <h1 className="font-inter font-bold text-xl">Be a member</h1>
          <p className="font-inter text-md">Hope we meet your requirements.</p>
        </div>
        <section className="py-4">
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrorMessage("");
            }}
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMessage("");
            }}
          />
          <InputField
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setErrorMessage("");
            }}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage("");
            }}
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmpass}
            onChange={(e) => {
              setConfirmpass(e.target.value);
              setErrorMessage("");
            }}
          />
          {errorMessage && (
            <p className="font-inter text-sm text-red-500">{errorMessage}</p>
          )}
        </section>
        <div className="flex flex-col items-center mt-2">
          <Button
            text="Sign Up"
            onClick={() => onSubmit()}
            className="w-44 h-10"
            textClassName="text-lg"
          />
          <p className="font-inter text-md mt-8">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-secondary font-bold cursor-pointer hover:underline"
            >
              Sign in
            </a>
            <span> now</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
