import React, { useState } from "react";
import PaperContent from "../component/PaperContent";
import * as M from "../style/StyledMain";

const Main = () => {
  const [showPaper, setShowPaper] = useState(false);
  return (
    <M.Container>
      <M.LetterImg
        src={`${process.env.PUBLIC_URL}/images/letter.svg`}
        onClick={() => setShowPaper(true)}
        className={showPaper ? "fadeOut" : "fadeIn"}
      />

      <M.Paper className={showPaper ? "fadeIn" : "fadeOut"}>
        <PaperContent />
      </M.Paper>
    </M.Container>
  );
};

export default Main;
