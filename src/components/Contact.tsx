import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Button from "./Button";
import Icons from "./Icons";
import InputContainer from "./InputContainer";

const Contact = () => {
  return (
    <section className="block container">
      <div className="contact">
        <form>
          <h2>Send a Message</h2>
          <div className="grid grid--1x2 gap contact__container">
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
          </div>
          <div className="contact__container">
            <InputContainer type="text" name="message" size="lg">
              Write your message here...
            </InputContainer>
            <Button link="/" type="primary">
              Send
            </Button>
          </div>
        </form>
        <div className="flex flex--column justify--between contact__info">
          <h3>Contact Info</h3>
          <div>
            <p className="flex gap align--center">
              <CiLocationOn size={25} />
              1743 Taft Ave, Malate, Manila, 1004 Metro Manila
            </p>
            <p className="flex gap align--center">
              <AiOutlineMail size={25} />
              registrar@pwu.edu.ph
            </p>
            <p className="flex gap align--center">
              <BiPhoneCall size={25} />
              +63(2) 8465-1777 | Fax no. +63(2) 8526-6935
            </p>
          </div>
          <div className="flex justify--center">
            <Icons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
