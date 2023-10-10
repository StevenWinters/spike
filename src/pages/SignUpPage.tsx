import SignUp from "../components/SignUp";
import Header from "../components/Header";
import { useEffect } from "react";

const SignUpPage = () => {
  useEffect(() => {
    document.title = "Spike! | Sign Up";
  });
  return (
    <>
      <Header>Sign Up</Header>
      <SignUp />
    </>
  );
};

export default SignUpPage;
