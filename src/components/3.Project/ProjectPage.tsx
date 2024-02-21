import styled from "styled-components";
import { projects } from "../../data";
import { media } from "../../theme";
import { Progress, ProgressContainer } from "../1.Intro/IntroSlider";
import { Wrapper } from "../Wrapper";
import ProjectBox from "./ProjectBox";

export const Title = styled.div`
  color: ${({ theme }) => theme.color.purple};
  font-size: 3em;
  font-weight: 600;
`;

const ProjectsBoxes = styled.div`
  color: ${({ theme }) => theme.color.white};
  margin: 2em;
  margin-top: 10em;
  flex-direction: column;

  ${media.small_max} {
    font-size: 14px;
  }
`;

/**
 * 
 *  <Title>Projects</Title>
 *  is not responsive correctly
 * 
 */
const ProjectPage = () => {
  return (
    <Wrapper>
      <ProgressContainer width={40} marginLeft={10} mobileMarginTop={10} mobileMarginLeft={5}>
        <Title>Projects</Title>
        <Progress />
      </ProgressContainer>
      <ProjectsBoxes>
        {projects.map((project, index) => (
          <ProjectBox key={index.toString()} {...{ project, index }} />
        ))}
      </ProjectsBoxes>
    </Wrapper>
  );
};

export default ProjectPage;
