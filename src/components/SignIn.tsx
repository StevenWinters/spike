import { Link } from "react-router-dom";
import Button from "./Button";
import InputContainer from "./InputContainer";
import Logo from "./Logo";

const SignIn = () => {
  return (
    <div className="block container">
      <div className="form__holder">
        <form className="center">
          <Logo />
          <h2>Welcome to Spike</h2>
          <div className="grid grid--1x2 gap form__container">
            <InputContainer type="email" name="email">
              Email
            </InputContainer>
            <InputContainer type="password" name="password">
              Password
            </InputContainer>
          </div>
          <div className="form__container">
            <InputContainer
              type="checkbox"
              name="terms"
              container="on"
              size="none"
            >
              I agree to the{" "}
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </InputContainer>
            <Button link="/" type="primary">
              Send
            </Button>
          </div>
          <p>
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
