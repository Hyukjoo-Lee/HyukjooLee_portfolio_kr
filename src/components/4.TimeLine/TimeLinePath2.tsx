import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { svgData } from "../../data";
import { media } from "../../theme";
import TimeLineContent from "./TimeLineContent";
import { ContextContainer } from "./TimeLinePage";

const Content2 = styled.div`
  margin-top: -8px;
  .path {
    fill: none;
    stroke: ${({ theme }) => theme.color.white};
    stroke-width: 2px;

    ${media.medium_max} {
      stroke-width: 1px;
    }
  }
  .svg {
    width: auto;
    height: auto;
  }

  .nz {
    ${media.large_max} {
      right: 10%;
    }
    ${media.medium_max} {
      right: 5%;
    }
  }

  .canada {
    ${media.medium_max} {
      margin-left: 1%;
    }
  }
`;

/**
 * Path2: Computer SVG
 */
const TimeLinePath2 = () => {
  const Content2divRef = useRef<HTMLDivElement>(null);
  const path2 = useRef<SVGPathElement>(null);

  const [path2Length, setPathLength] = useState(0);
  const [path2dashOffset, setOffset] = useState(0);

  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);

  useEffect(() => {
    // Path1 default setting
    const length = path2.current?.getTotalLength();
    const offSetTop = Content2divRef.current?.offsetTop;
    const offSetHeight = Content2divRef.current?.offsetHeight;

    setPathLength(length!);
    setOffsetTop(offSetTop!);
    setOffsetHeight(offSetHeight!);

    // Path2 default setting
  }, []);

  function scrollHandler() {
    const scrollY = window.scrollY + window.innerHeight * 0.7;
    setOffset(calcDashoffset(scrollY, path2Length));
  }

  function calcDashoffset(scrollY: number, length: number) {
    var ratio = (scrollY - offsetTop) / offsetHeight;
    var value = length - length * ratio;

    return value < 0 ? 0 : value > length ? length : value;
  }

  window.addEventListener("scroll", scrollHandler);

  // Context Container 의 marginTop 을 모두 위쪽으로 -20%씩 이동 시켜야 함
  var w = window.innerWidth;
  var marginTop_1 = -30;
  var marginTop_2 = 20;

  // 756 정도 일때 margin top 을
  if (w < 756) {
    marginTop_1 = marginTop_1 - 25;
    marginTop_2 = marginTop_2 - 40;
  }

  return (
    <Content2 ref={Content2divRef}>
      <ContextContainer
        className="nz"
        width={60}
        marginTop={marginTop_1}
        marginLeft={40}
      >
        <TimeLineContent country="New Zealand" />
      </ContextContainer>
      <ContextContainer
        className="canada"
        width={60}
        marginTop={marginTop_2}
        marginLeft={-10}
      >
        <TimeLineContent isEnd={true} country="Canada" />
      </ContextContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1039">
        <path
          ref={path2}
          strokeDasharray={path2Length}
          strokeDashoffset={path2dashOffset}
          className="path"
          d={svgData[1].d}
        />
      </svg>
    </Content2>
  );
};

export default TimeLinePath2;
