import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;

  .glowing {
    position: relative;
    min-width: 700px;
    height: 550px;
    margin: -150px;
    transform-origin: right;
    animation: colorChange 4s linear infinite;
  }

  .glowing:nth-child(even) {
    transform-origin: left;
  }

  @keyframes colorChange {
    0% {
      filter: hue-rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .glowing span {
    position: absolute;
    top: calc(80px);
    left: calc(80px);
    bottom: calc(80px);
    right: calc(80px);
  }

  .glowing span::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -8px;
    width: 15px;
    height: 15px;
    background: #f00;
    border-radius: 50%;
  }

  .glowing span:nth-child(3n + 1)::before {
    background: ${({ theme }) => theme.color.purple};
    box-shadow: 0 0 20px ${({ theme }) => theme.color.purple},
      0 0 40px ${({ theme }) => theme.color.purple},
      0 0 60px ${({ theme }) => theme.color.purple},
      0 0 80px ${({ theme }) => theme.color.purple},
      0 0 0 8px rgba(134, 255, 0, 0.1);
  }

  .glowing span:nth-child(3n + 2)::before {
    background: ${({ theme }) => theme.color.blue};
    box-shadow: 0 0 20px ${({ theme }) => theme.color.blue},
      0 0 40px ${({ theme }) => theme.color.blue},
      0 0 60px ${({ theme }) => theme.color.blue},
      0 0 80px ${({ theme }) => theme.color.blue},
      0 0 0 8px rgba(255, 214, 0, 0.1);
  }

  .glowing span:nth-child(3n + 3)::before {
    background: ${({ theme }) => theme.color.lightpurple};
    box-shadow: 0 0 20px ${({ theme }) => theme.color.lightpurple},
      0 0 40px ${({ theme }) => theme.color.lightpurple},
      0 0 60px ${({ theme }) => theme.color.lightpurple},
      0 0 80px ${({ theme }) => theme.color.lightpurple},
      0 0 0 8px rgba(0, 226, 255, 0.1);
  }

  .glowing span:nth-child(3n + 1) {
    animation: animate 10s alternate infinite;
  }

  .glowing span:nth-child(3n + 2) {
    animation: animate-reverse 3s alternate infinite;
  }

  .glowing span:nth-child(3n + 3) {
    animation: animate 8s alternate infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-reverse {
    0% {
      transform: rotate(360deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

const Background = () => {
  return (
    <Container>
      <div className="glowing">
        <span></span>

        <span></span>

        <span></span>
      </div>

      <div className="glowing">
        <span></span>

        <span></span>

        <span></span>
      </div>

      <div className="glowing">
        <span></span>

        <span></span>

        <span></span>
      </div>

      <div className="glowing">
        <span></span>

        <span></span>

        <span></span>
      </div>
    </Container>
  );
};

export default Background;
