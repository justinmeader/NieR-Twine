import styled from "styled-components";
import { LoadingDots, LoadingLogs, SpinLoadingIcon } from "../components";
import yorhaLogo from "./../assets/yorha-opacity-logo.png";
import { useNavigate } from "react-router-dom";
import { StyledGlitchText } from "../styles/glitchingTextStyle";
import { mobileMaxWidth } from "../utils/mediaQueriesValues";
/*
TODO: Add route changing animation
*/

const Main = styled.main`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85) url(${yorhaLogo}) center center no-repeat;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  text-shadow: 0px 0px 5px white;
  padding: 2% 4% 4% 4%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${mobileMaxWidth}px) {
    background-size: contain;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

const GlitchingH1 = styled.h1`
  ${StyledGlitchText}
  opacity: 0.9;
`;

const GlitchingP = styled.p`
  ${StyledGlitchText}
  opacity: 0.8;
`;

const Section = styled.section`
  margin-left: 2%;
  height: 100%;
  position: relative;
  line-height: 4vh;
`;

export const Loading = () => {
  const navigate = useNavigate();
  const waitingTime = 1000;

  const loadingCompleted = () => {
    setTimeout(() => {
      navigate("/map");
    }, waitingTime);
  };

  return (
    <Main>
      <Header>
        <Container style={{}}>
          <GlitchingH1>LOADING </GlitchingH1>
          <GlitchingP style={{ marginLeft: "4px" }}>
            {" "}
            - CHECKING SYSTEM
          </GlitchingP>
          <LoadingDots />
        </Container>
        <SpinLoadingIcon />
      </Header>
      <Section>
        <LoadingLogs callBack={loadingCompleted} />
      </Section>
    </Main>
  );
};
