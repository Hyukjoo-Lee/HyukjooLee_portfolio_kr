import styled from "styled-components";
import { media } from "../../theme";

const Container = styled.div<{ isEnd: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isEnd }) => (isEnd ? "flex-start" : "flex-end")};
  font-size: 18px;
  padding-bottom: 1.7em;

  ${media.small_max} {
    padding: 0 0 0.4em 0;
  }
`;

const Country = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-size: 1em;
  padding-bottom: 0.5em;

  ${media.medium_max} {
    font-size: 15px;
  }

  ${media.small_max} {
    font-size: 12px;
    padding: 0.5rem 0;
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.color.purple};
  font-size: 1.2em;
  font-weight: 700;
  padding-bottom: 0.4em;

  ${media.medium_max} {
    font-size: 0.8em;
  }

  ${media.mobile} {
    font-size: 0.7em;
  }
`;

const Date = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 0.9em;
  font-style: italic;
  padding-bottom: 0.8em;

  ${media.medium_max} {
    font-size: 0.8em;
  }

  ${media.smaller_max} {
    font-size: 0.65em;
  }
`;

const About = styled.div`
  font-size: 0.9em;
  color: ${({ theme }) => theme.color.white};

  ${media.medium_max} {
    font-size: 0.7em;
  }

  ${media.mobile} {
    font-size: 10px;
  }
`;

const TimeLineBox = ({ career, isEnd }: any) => {
  console.log("isEnd" + isEnd);
  return (
    <Container data-aos="flip-down" data-aos-delay={500} {...{ isEnd }}>
      {/* <Container {...{ isEnd }}> */}
      <Country>{career.country}</Country>
      <Title>{career.title}</Title>
      <Date>{career.date}</Date>
      <About>{career.about}</About>
    </Container>
  );
};

export default TimeLineBox;
