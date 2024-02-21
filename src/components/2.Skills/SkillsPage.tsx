import styled from "styled-components";
import { skills } from "../../data";
import { media } from "../../theme";
import { Wrapper } from "../Wrapper";
import Skills from "./Skills";

const SkillBoxes = styled.div`
  display: grid;
  margin: 5em;
  grid-template-columns: repeat(2, 1fr);
  height: auto;

  ${media.medium_max} {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 0.5vh;
  }

  ${media.small_max} {
    margin: 1.5em;
  }
`;

const SkillsPage = () => {
  return (
    <Wrapper>
      <SkillBoxes>
        {skills.map((skill, idx) => (
          <Skills key={idx.toString()} skill={skill} />
        ))}
      </SkillBoxes>
    </Wrapper>
  );
};

export default SkillsPage;
