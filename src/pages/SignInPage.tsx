import SignIn from "../components/SignIn";
import Header from "../components/Header";
import { useEffect } from "react";

const SignInPage = () => {
  useEffect(() => {
    document.title = "Spike! | Sign In";
  });
  return (
    <>
      <Header>Sign In</Header>
      <SignIn />
    </>
  );
};

export default SignInPage;
