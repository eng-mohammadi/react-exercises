import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SliderBox = styled.div`
  position: relative;
  width: 60%;
  height: 450px;
  overflow: hidden;
  border-radius: 15px;
  margin: 20px auto;
`;

// "$isActive" is a transient prop: styled-components uses it for styling
// and does not forward it to the DOM <img> element.
const SliderImage = styled.img`
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: ${(props) => (props.$isActive ? "block" : "none")};
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Button = styled.button`
  padding: 5px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #ac00a6;
  font-size: 1.1rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease;
    background-color: #bbec71;
    color: rgb(7, 58, 100);
  }
`;

export { SliderBox, SliderImage, SliderControls, Button };
