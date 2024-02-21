import styled from "styled-components";
import { ManSVG } from "../../assets/images/ManSVG";
import { media } from "../../theme";
import TimeLineContent from "./TimeLineContent";

import TimeLinePath from "./TimeLinePath";
import TimeLinePath2 from "./TimeLinePath2";
import { Wrapper } from "../Wrapper";

const Header = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;

  .path {
    fill: none;
    stroke: ${({ theme }) => theme.color.white};
    stroke-width: 2px;

    ${media.medium_max} {
      stroke: ${({ theme }) => theme.color.gray};
    }
  }
`;

export const ContextContainer = styled.div<StyledContainerProps>`
  width: ${({ width }) => `${width}%`};
  height: 50vh;
  margin-left: ${({ marginLeft }) => `${marginLeft}%`};
  padding-left: ${({ paddingLeft }) => `${paddingLeft}%`};
  margin-top: ${({ marginTop }) => `${marginTop}%`};
  position: absolute;

  ${media.medium_max} {
    height: 40vh;
  }

  ${media.small_max} {
    height: 35vh;
  }

  ${media.smaller_max} {
    height: 20vh;
  }
`;

const Footer = styled.div`
  height: 10vh;
  background-color: transparent;

  ${media.medium_max} {
    height: 25vh;
  }

  ${media.mobile} {
    height: 10vh;
  }
`;

interface StyledContainerProps {
  width?: number;
  marginTop?: number;
  marginLeft?: number;
  paddingLeft?: number;
}

const TimeLinePage = () => {
  return (
    <Wrapper>
      <Header>
        <ContextContainer width={60} marginLeft={30}>
        {/* <ContextContainer width={60}> */}
          <TimeLineContent
            country={"South Korea"}
            marginTop={10}
            isFirst={true}
          />
        </ContextContainer>
        <ManSVG />
      </Header>
      {/* Path_1 */}
      <TimeLinePath />
      <TimeLinePath2 />
      <Footer />
    </Wrapper>
  );
};

export default TimeLinePage;
