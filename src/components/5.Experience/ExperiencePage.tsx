import styled from "styled-components";
import { experiences } from "../../data";
import { media } from "../../theme";
import { Progress, ProgressContainer } from "../1.Intro/IntroSlider";
import { Wrapper } from "../Wrapper";
import ExperienceBox from "./ExperienceBox";

export const Title = styled.div`
  color: ${({ theme }) => theme.color.purple};
  font-size: 3em;
  font-weight: 600;
`;

const ExperiencesBoxes = styled.div`
  color: ${({ theme }) => theme.color.white};
  margin: 2em;
  margin-top: 10em;
  flex-direction: column;

  ${media.small_max} {
    font-size: 14px;
  }
`;

const ExperiencePage = () => {
  return (
    <Wrapper>
      <ProgressContainer
        width={60}
        marginLeft={10}
        mobileMarginTop={10}
        mobileMarginLeft={5}
      >
        <Title>Experiences</Title>
        <Progress />
      </ProgressContainer>
      <ExperiencesBoxes>
        {experiences.map((experiences, index) => (
          <ExperienceBox key={index.toString()} {...{ experiences, index }} />
        ))}
      </ExperiencesBoxes>
    </Wrapper>
  );
};

export default ExperiencePage;
