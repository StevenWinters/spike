import TermsAndConditions from "../components/TermsAndConditions";
import Header from "../components/Header";
import { useEffect } from "react";

const TermsAndConditionsPage = () => {
  useEffect(() => {
    document.title = "Spike! | Terms and Conditions";
  });
  return (
    <>
      <Header>Terms and Conditions</Header>
      <TermsAndConditions />
    </>
  );
};

export default TermsAndConditionsPage;
