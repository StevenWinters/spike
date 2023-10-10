import HistoryContent from "../components/HistoryContent";
import Header from "../components/Header";
import { useEffect } from "react";

const HistoryPage = () => {
  useEffect(() => {
    document.title = "Spike! | History";
  });
  return (
    <>
      <Header>History</Header>
      <HistoryContent />
    </>
  );
};

export default HistoryPage;
