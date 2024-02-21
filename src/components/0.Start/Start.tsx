import styled from "styled-components";
import { media } from "../../theme";

const NameContainer = styled.div`
  height: 100vh;
  margin: 0 10%;

  // Responsive start view point
  ${media.medium_max} {
    margin: 5% 5%;
  }

  ${media.small_max} {
    margin: 20% 10%;
  }
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  font-weight: 700;
  top: 32vh;
  font-size: 8.5vw;
  color: ${({ theme }) => theme.color.purple};
  -webkit-text-stroke: 0.02em ${({ theme }) => theme.color.white};

  .second {
    position: absolute;
    left: auto;
    color: ${({ theme }) => theme.color.purple};
    -webkit-text-stroke: 0.02em ${({ theme }) => theme.color.white};
    right: 0;
  }
`;
const Start = () => {
  return (
    <NameContainer>
      <Text>
        <div>HYUKJOO LEE</div>
        <div className="second">PORTFOLIO</div>
      </Text>
    </NameContainer>
  );
};

export default Start;
