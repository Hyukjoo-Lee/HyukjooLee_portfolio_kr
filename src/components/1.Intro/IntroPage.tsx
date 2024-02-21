import styled from "styled-components";
import { media } from "../../theme";
import { Wrapper } from "../Wrapper";
import IntroCard from "./IntroCard";
import IntroSlider from "./IntroSlider";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 790px;
  white-space: pre-line;
  line-height: 210%;
  font-size: 1.1em;
  color: ${({ theme }) => theme.color.white};

  ${media.medium_max} {
    width: 470px;
  }

  ${media.smaller_max} {
    width: 320px;
    font-size: 0.9em;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.3em;
  background: ${({ theme }) => theme.color.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IntroPage = () => {
  return (
    <Wrapper>
      <InfoBox>
        <IntroSlider />
        <IntroCard />
        <TextBox>
          <Bold>Software developer</Bold> who takes pleasure in  continuous learning and contributing to innovative projects in development. 
          An <Bold>experienced</Bold> and <Bold>recent graduate</Bold> with fundamental knowledge of software development. {"\n"} {"\n"}
          I find a sense of accomplishment when I can apply the theory I've learned at work.{"\n"} I'm eager to channel this passion and experience into new projects.
        </TextBox>
      </InfoBox>
    </Wrapper>
  );
};

export default IntroPage;
