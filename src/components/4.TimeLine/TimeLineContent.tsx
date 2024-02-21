import styled from "styled-components";
import { careers } from "../../data";
import { media } from "../../theme";

import TimeLineBox from "./TimeLineBox";

const Card = styled.div<CardInterface>`
  display: flex;
  position: relative;
  margin-top: ${({ marginTop }) => `${marginTop}%`};
  margin-left: 14em;

  ${media.medium_max} {
    font-size: 1em;
    margin-top: 2em;
    margin-left: 0em;
  }

  ${media.small_max} {
    font-size: 0.75em;
    margin-top: 0em;
  }

  ${media.smaller_max} {
    font-size: 0.5em;
  }

  ${media.mobile} {
    margin-left: 1.4em;
  }

  // Arrow vertical line (box)
  :last-child {
    border: 0px solid ${({ theme }) => theme.color.white};
    border-left-width: 0.15em;
    height: fit-content;
    bottom: 2em;
    left: 2em;

    ${media.mobile} {
      left: -2em;
    }
  }
`;

const Title = styled.div<{ text: string }>`
  color: ${({ theme }) => theme.color.purple};
  position: absolute;
  font-size: 3em;
  left: -1rem;
  top: -3rem;

  ${media.medium_max} {
    font-size: 2em;
    margin-top: 0.2em;
  }

  ${media.small_max} {
    font-size: 2em;
    margin-top: 0em;
  }
`;

// Arrow right side line
const Arraw = styled.div`
  position: absolute;
  height: 3em;
  width: 0.15em;
  background-color: ${({ theme }) => theme.color.lightpurple};
  left: 0.7rem;
  bottom: -0.18rem;
  transform: rotate(35deg);

  ${media.medium_max} {
    height: 1.5em;
    left: 0.25em;
    bottom: -0.14rem;
  }
`;

const TimeLineBoxes = styled.div`
  margin-top: 2em;
  margin-left: 5em;

  ${media.large_max} {
    margin-left: 1em;
  }

  ${media.medium_max} {
    margin-top: 0.5em;
    margin-left: 4em;
  }

  ${media.small_max} {
    margin-top: 0;
    margin-left: 4em;
  }

  ${media.smaller_max} {
    margin-top: -2em;
    margin-left: 1.8em;
  }
`;

interface CardInterface {
  marginTop?: number;
  marginLeft?: number;
  isFirst?: boolean;
  isEnd?: boolean;
  country?: string;
}

export const TimeLineContent = (props: CardInterface) => {
  return (
    <Card marginTop={props.marginTop}>
      {props.isFirst ? <Title text="TimeLine.">TimeLine.</Title> : null}
      <Arraw />
      <TimeLineBoxes>
        {careers
          .filter((career) => career.country === props.country)
          .map((filteredcareer, idx) => (
            <TimeLineBox
              key={idx.toString()}
              career={filteredcareer}
              isEnd={props.isEnd}
            />
          ))}
      </TimeLineBoxes>
    </Card>
  );
};

export default TimeLineContent;
