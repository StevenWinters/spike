import { useEffect } from "react";
import CourtContent from "../components/CourtContent";
import Header from "../components/Header";

const CourtPage = () => {
  useEffect(() => {
    document.title = "Spike! | Court";
  });
  return (
    <>
      <Header>Court</Header>
      <CourtContent />
    </>
  );
};

export default CourtPage;
