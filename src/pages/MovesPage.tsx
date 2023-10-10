import MovesContent from "../components/MovesContent";
import Header from "../components/Header";
import { useEffect } from "react";

const MovesPage = () => {
  useEffect(() => {
    document.title = "Spike! | Moves";
  });
  return (
    <>
      <Header>Moves</Header>
      <MovesContent />
    </>
  );
};

export default MovesPage;
