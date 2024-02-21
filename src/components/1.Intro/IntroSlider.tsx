import styled from "styled-components";
import { media } from "../../theme";

const SlideContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 1em;
`;

const Slides = styled.div`
  width: 600%;
  display: flex;
  animation: slide 20s infinite;
`;

const Slide = styled.div`
  width: 100%;
  font-size: 3em;
  font-weight: 700;
  padding-left: 4%;
  color: ${({ theme }) => theme.color.purple};
  -webkit-text-stroke: 0.02em ${({ theme }) => theme.color.white};
  ${media.medium_max} {
    font-size: 2em;
  }
`;

export const ProgressContainer = styled.div<ProgressBarProps>`
  position: relative;
  width: ${({ width }) => `${width}%`};
  padding-left: ${({ paddingLeft }) => `${paddingLeft}%`};
  margin-left: ${({ marginLeft }) => `${marginLeft}em`};
  height: 0.3em;

  ${media.large_max} {
    width: ${({ mobileWidth }) => `${mobileWidth}%`};
    padding-left: ${({ mobilePaddingLeft }) => `${mobilePaddingLeft}%`};
    margin-left: ${({ mobileMarginLeft }) => `${mobileMarginLeft}em`};
    margin-top: ${({ mobileMarginTop }) => `${mobileMarginTop}em`};
  }
`;

export const Progress = styled.div`
  height: 0.2em;
  background: ${({ theme }) => theme.color.gradient};
  position: absolute;
  animation: progress 4s infinite;
`;

interface ProgressBarProps {
  paddingLeft?: number;
  marginLeft?: number;
  width?: number;
  
  mobileWidth?: number;
  mobilePaddingLeft?: number;
  mobileMarginLeft?: number;
  mobileMarginTop?: number;
}

const IntroSlider = () => (
  <SlideContainer>
    <Slides>
      <Slide>
        <span>Full-Stack</span>
      </Slide>
      <Slide>
        <span>Java</span>
      </Slide>
      <Slide>
        <span>React</span>
      </Slide>
      <Slide>
        <span>HTML / CSS</span>
      </Slide>
      <Slide>
        <span>Javascript</span>
      </Slide>
      <Slide>
        <span>Typescript</span>
      </Slide>
    </Slides>
    <ProgressContainer width={10} paddingLeft={24}>
      <Progress />
    </ProgressContainer>
  </SlideContainer>
);

export default IntroSlider;
