import styled from "styled-components";
import { media } from "../../theme";

const SkillsBox = styled.div`
  position: relative;
  border: 0.2em solid ${({ theme }) => theme.color.purple};
  border-radius: 2em;
  margin: 4em;
  padding: 1.7em;
  ${media.medium_max} {
    font-size: 14px;
    margin: 1.2em;
    padding: 1.7em;
    margin-bottom: 5vh;
  }
`;

const SkillTitle = styled.div`
  transform: rotate(-10deg);
  position: absolute;
  left: -1.5em;
  top: -1.5em;
  border: 0.18em solid ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.purple};
  background-color: ${({ theme }) => theme.color.lightpurple};
  padding: 0.3em 0.4em;
  font-weight: 600;
  font-size: 24px;

  ${media.medium_max} {
    font-size: 20px;
  }

  ${media.small_max} {
    font-size: 17px;
  }
`;

const SkillContents = styled.div`
  line-height: 2em;
  color: ${({ theme }) => theme.color.white};

  ${media.small_max} {
    font-size: 1em;
  }
`;

const Skills = ({ skill }: any) => (
  <SkillsBox data-aos="flip-right">
    {/* <SkillsBox> */}
    <SkillTitle>{skill.title}</SkillTitle>
    <SkillContents className="contents">
      {skill.contents.map((content: string, idx: number) => (
        <div key={idx.toString()}>{content}</div>
      ))}
    </SkillContents>
  </SkillsBox>
);

export default Skills;
