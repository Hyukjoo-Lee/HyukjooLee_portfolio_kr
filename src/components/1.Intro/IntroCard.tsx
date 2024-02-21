import styled from "styled-components";
import { useState } from "react";
import { media } from "../../theme";

const Conatiner = styled.div<{ isHover: boolean }>`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 3em;
  border-radius: 10%;

  ${media.small_max} {
    flex-wrap: wrap;
  }
`;

const Memo = styled.div`
  cursor: pointer;
  position: relative;

  ${media.small_max} {
    margin-bottom: 5vh;
  }
`;

const JobTitle = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.purple};
  padding: 0.5em 1.5em;
  font-weight: 800;
  font-size: 1.5em;
  border-radius: 2em;
  color: ${({ theme }) => theme.color.white};
  left: -1em;
  top: 0.5em;
  transform: rotate(-15deg);
  border: 0.2em solid ${({ theme }) => theme.color.black};

  ${media.medium_max} {
    font-size: 1.2em;
    margin-top: 15px;
  }
`;

const Circle = styled.div`
  width: 12em;
  height: 12em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.lightpurple};

  ${media.small_max} {
    width: 10em;
    height: 10em;
    margin-top: 15px;
  }
`;

const InfoCircle = styled.div<{ isHover: boolean }>`
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: 0.1s;
  position: absolute;
  top: 0;
  width: 12em;
  height: 12em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.blue};

  ${media.small_max} {
    width: 10em;
    height: 10em;
    margin-top: 15px;
  }
`;

const Info = styled.div<{ isHover: boolean }>`
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  top: 0em;
  line-height: 1.5em;
  width: 12em;
  height: 12em;
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: 0.8s;
  position: absolute;
  color: #fff;
  white-space: pre-line;
  text-align: center;


  ${media.small_max} {
    top: 0.2em;
    line-height: 1.8em;
    width: 10em;
    height: 10em;
    /* margin-top: 15px; */
  }
`;

const ButtonsContainer = styled.div`
  border-radius: 2.5em;
  padding: 4em;
  margin-left: 5em;

  box-sizing: border-box;
  height: 13em;
  display: flex;
  font-weight: 600;
  letter-spacing: 0.1em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.2em solid ${({ theme }) => theme.color.white};

  ${media.medium_max} {
    margin-left: 1em;
    height: 12em;
  }

  ${media.small_max} {
    margin-left: 0.2em;
    margin-top: 1em;
    height: 12em;
  }
`;

const Button = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0.8em 2em;
  border-radius: 2em;
  border: 0.2em solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.purple};
  color: ${({ theme }) => theme.color.white};
  :not(:first-child) {
    margin-top: 0.6em;
  }
  :hover {
    background-color: ${({ theme }) => theme.color.blue};
  }

  ${media.small_max} {
    padding: 0.8em 0.8em;
    font-size: 0.95em;
    text-align: center;
  }
`;

const IntroCard = () => {
  const [isHover, setIsHover] = useState(false);
  const resume = require("../../assets/resume/Hyukjoo(Jaydon)Lee.pdf");

  return (
    <Conatiner {...{ isHover }}>
      <Memo
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <JobTitle>Developer</JobTitle>
        <Circle />
        <InfoCircle {...{ isHover }} />
        <Info {...{ isHover }}>
          {`
            Hyukjoo Lee
            Software developer
            `}
        </Info>
      </Memo>

      <ButtonsContainer>
        <Button onClick={() => window.open("mailto:hjjaydon.lee@gmail.com")}>
          EMAIL
        </Button>
        <Button onClick={() => window.open("https://github.com/Hyukjoo-Lee")}>
          GITHUB
        </Button>
        <Button
          onClick={() =>
            window.open("https://hyukjoo-lee-github-io.vercel.app")
          }
        >
          BLOG
        </Button>
        <Button onClick={() => window.open(resume, '_blank')}>RESUME</Button>
      </ButtonsContainer>
    </Conatiner>
  );
};

export default IntroCard;
