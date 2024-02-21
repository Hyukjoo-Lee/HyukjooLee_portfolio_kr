import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { svgData } from "../../data";
import { media } from "../../theme";
import TimeLineContent from "./TimeLineContent";
import { ContextContainer } from "./TimeLinePage";

const Content1 = styled.div`
  /* To ensure smooth connection of each path  */
  margin-top: -8px;
  .path {
    fill: none;
    stroke: ${({ theme }) => theme.color.white};
    stroke-width: 2px;

    ${media.medium_max} {
      stroke: ${({ theme }) => theme.color.gray};
    }
  }
`;

/**
 * <---- Design Logic ---->
 *
 * stroke-dasharray: totallength of the svg path
 * stroke-dashoffset: 0 = complete
 *                    totallength = start point
 * ratio, at point where scroll down from the top = window scrollY
 * + window.innerHeight
 * - div.offsetTop % div.offsetHeight
 *
 *  when scroll is at the end
 *  window.scrollY + window.innerHeight
 *  - div.offsetTop
 *  / div.offsetHeight
 *
 * length - (length * ratio)
 */
const TimeLinePath = () => {
  const Content1divRef = useRef<HTMLDivElement>(null);
  const path1 = useRef<SVGPathElement>(null);

  const [path1Length, setPathLength] = useState(0);
  const [path1dashOffset, setOffset] = useState(0);

  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);

  useEffect(() => {
    const length = path1.current?.getTotalLength();
    const offSetTop = Content1divRef.current?.offsetTop;
    const offSetHeight = Content1divRef.current?.offsetHeight;

    setPathLength(length!);
    setOffsetTop(offSetTop!);
    setOffsetHeight(offSetHeight!);
  }, []);

  function scrollHandler() {
    const scrollY = window.scrollY + window.innerHeight * 0.7;
    setOffset(calcDashoffset(scrollY, path1Length));
  }

  function calcDashoffset(scrollY: number, length: number) {
    var ratio = (scrollY - offsetTop) / offsetHeight;
    var value = length - length * ratio;

    return value < 0 ? 0 : value > length ? length : value;
  }

  window.addEventListener("scroll", scrollHandler);

  // When it turns to 756px width viewport,
  // margin-top of context container - 20%
  var w = window.innerWidth;
  // default
  var marginTop = 60;

  if (w < 756) {
    marginTop = marginTop - 20;
  }

  return (
    <Content1 ref={Content1divRef}>
      <ContextContainer width={60} marginTop={marginTop}>
        <TimeLineContent isFirst={false} isEnd={true} country={"Australia"} />
      </ContextContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 3208">
        <path
          ref={path1}
          strokeDasharray={path1Length}
          strokeDashoffset={path1dashOffset.toString()}
          className="path"
          // To store separately for readability
          d={svgData[0].d}
        />
      </svg>
    </Content1>
  );
};

export default TimeLinePath;
