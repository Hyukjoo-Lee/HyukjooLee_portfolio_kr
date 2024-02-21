import styled from "styled-components";
import { media } from "../../theme";

export const Wrapper = styled.div`
  // Common container style
  .container {
    width: max-content;
    height: min-content;
    padding: 3em 3em 0 3em;
    position: relative;
    margin-bottom: 10vh;
    border-radius: 1.5em;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${media.medium_max} {
      width: fit-content;
      align-items: center;
      padding: 2.5em 2.5em 0 2.5em;
    }

    ${media.small_max} {
      padding: 2em 2em 0 2em;
    }

    .svg {
      width: 40px;
      height: 40px;
      margin: 1em 0.8em 1em 0;
    }
  }

  // Blue container style
  .blue-container {
    border: 0.1em solid ${({ theme }) => theme.color.blue};
    left: 28%;

    ${media.large_max} {
      left: 8%;
    }

    ${media.medium_max} {
      left: 0;
    }

    .date {
      left: 2em;

      ${media.mobile} {
        left: -0.5em;
      }
    }

    .title {
      color: #fff;
      background-color: ${({ theme }) => theme.color.blue};
      border: 0.1em solid ${({ theme }) => theme.color.blue};
      right: -3em;
      transform: rotate(20deg);

      ${media.medium_max} {
        right: -2em;
        font-size: 16px;
      }

      ${media.small_max} {
        right: -1em;
        font-size: 12px;
      }
    }

    .position {
      color: ${({ theme }) => theme.color.blue};
    }

    .svg {
      fill: ${({ theme }) => theme.color.blue};
    }
  }

  // Purple Container
  .purple-container {
    border: 0.1em solid ${({ theme }) => theme.color.purple};
    left: 10vw;

    ${media.large_max} {
      left: 8%;
    }

    ${media.medium_max} {
      left: 0;
    }

    .date {
      right: 2em;

      ${media.mobile} {
        right: -1.5em;
      }
    }

    .title {
      color: #000;
      background-color: ${({ theme }) => theme.color.purple};
      border: 0.1em solid ${({ theme }) => theme.color.purple};
      left: -3em;
      transform: rotate(-20deg);

      ${media.medium_max} {
        left: -2em;
        font-size: 16px;
      }

      ${media.small_max} {
        left: -1em;
        font-size: 12px;
      }
    }

    .position {
      color: ${({ theme }) => theme.color.purple};
    }

    .svg {
      fill: ${({ theme }) => theme.color.purple};
    }
  }
`;

export const Company = styled.div`
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  padding: 1em;
  border-radius: 2em;
  top: -2em;
  padding: 1em;
`;

export const Date = styled.div`
  padding: 0 1em;
  position: absolute;
  background-color: transparent;
  border-radius: 50%;
  top: 0.4em;
`;

export const Skills = styled.div`
  display: flex;
  margin-bottom: 1em;

  ${media.smaller_max} {
    flex-wrap: wrap;
  }
`;

export const Skill = styled.div`
  background-color: #fff;
  color: #000;
  padding: 0.2em;
  border-radius: 0.5em;
  margin-right: 0.5em;

  ${media.smaller_max} {
    margin-bottom: 10px;
  }
`;

const Position = styled.div`
  font-size: 1.4em;
  font-weight: 700;
  padding: 0.1em;
`;

const ContentsBox = styled.div`
  font-size: 1em;
  margin: 0.5em;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  line-height: 2em;
`;


const ExperienceBox = ({ experiences, index }: any) => {
  // Show different color containers depends on numbers
  const isEven = index % 2 === 0;

  return (
    <Wrapper data-aos={isEven ? "flip-right" : "flip-left"}>
      <div className={isEven ? "container blue-container" : "container purple-container"}>
        <Company className="title">{experiences.title}</Company>
        <Date className="date">{experiences.date}</Date>
        <Skills>
          {experiences.skills.map((skill: string, index: number) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </Skills>
        <Position className="position">{experiences.position}</Position>
        <ContentsBox>
          {experiences.details.map((detail: string, index: number) => (
            <Content key={index}>+ {detail}</Content>
          ))}
        </ContentsBox>
      </div>
    </Wrapper>
  );
};

export default ExperienceBox;
