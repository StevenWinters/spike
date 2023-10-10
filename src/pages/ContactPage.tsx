import { useEffect } from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Spike! | Contact Us";
  });
  return (
    <>
      <Header>Contact</Header>
      <Contact />
    </>
  );
};

export default ContactPage;
