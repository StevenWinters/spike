import RulesContent from "../components/RulesContent";
import Header from "../components/Header";
import { useEffect } from "react";

const RulesPage = () => {
  useEffect(() => {
    document.title = "Spike! | Rules";
  });
  return (
    <>
      <Header>Rules</Header>
      <RulesContent />
    </>
  );
};

export default RulesPage;
