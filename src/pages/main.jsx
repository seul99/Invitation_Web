import React, { useState } from "react";
import PaperContent from "../component/PaperContent";
import * as M from "../style/StyledMain";

const Main = () => {
  const [showPaper, setShowPaper] = useState(false);
  const [hideLetter, setHideLetter] = useState(false);

  const handleClick = () => {
    setShowPaper(true); // Paper 시작
    setTimeout(() => setHideLetter(true), 200);
    // transition 0.5s 끝나면 LetterImg DOM 제거
  };

  return (
    <M.Container>
      <M.Box>
        {/* LetterImg */}
        {!hideLetter && (
          <M.LetterImg
            src={`${process.env.PUBLIC_URL}/images/letter.svg`}
            onClick={handleClick}
            onTransitionEnd={() => {
              if (showPaper) setHideLetter(true); // fadeOut 끝나면 제거
            }}
            className={showPaper ? "fadeOut" : "fadeIn"}
          />
        )}

        {/* Paper */}
        {showPaper && (
          <M.Paper className={hideLetter ? "fadeIn" : "fadeOut"}>
            <PaperContent />
          </M.Paper>
        )}
      </M.Box>
    </M.Container>
  );
};

export default Main;
