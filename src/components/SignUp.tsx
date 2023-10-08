import { Link } from "react-router-dom";
import InputContainer from "./InputContainer";
import Button from "./Button";
import Logo from "./Logo";

const SignUp = () => {
  return (
    <div className="block container">
      <div className="form__holder">
        <form className="center">
          <Logo />
          <h2>Sign Up to Spike</h2>
          <div className="grid grid--1x2 gap form__container">
            <InputContainer type="text" name="first-name">
              First Name
            </InputContainer>
            <InputContainer type="text" name="last-name">
              Last Name
            </InputContainer>
            <InputContainer type="email" name="email">
              Email
            </InputContainer>
            <InputContainer type="number" name="mobile-number">
              Mobile Number
            </InputContainer>
            <InputContainer type="password" name="password">
              Password
            </InputContainer>
            <InputContainer type="password" name="confirm-password">
              Confirm Password
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
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
