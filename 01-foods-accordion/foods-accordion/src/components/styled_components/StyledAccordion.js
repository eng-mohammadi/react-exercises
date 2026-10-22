import styled from "styled-components";

const MainBox = styled.div`
  width: 65%;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 7px;
`;

const HeaderBox = styled.div`
  width: 100%;
  background-color: ${(props) => (props.$flag ? "#56b8f5" : "#ccc")};
  border: ${(props) => (props.$flag ? "none" : "2px solid #ccc")};
  border-radius: ${(props) => (props.$flag ? "7px 7px 0 0" : "0")};
  padding: 8px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const IconDiv = styled.div`
  cursor: pointer;
`;

const I1 = styled.i`
  font-size: 1.2rem;
  display: ${(props) => (props.$flag ? "block" : "none")};
  color: ${(props) => (props.$flag ? "#fff" : "#000")};
`;

const I2 = styled.i`
  display: ${(props) => (props.$flag ? "none" : "block")};
  font-size: 1.2rem;
`;

const Span = styled.span`
  font-size: 1.2rem;
  color: ${(props) => (props.$flag ? "#fff" : "#000")};
`;

const HeartIcon = styled.i`
  font-size: 1.5rem;
  color: ${(props) => (props.$flag ? "red" : "#eeeded")};
`;

export { MainBox, HeaderBox, IconDiv, I1, I2, Span, HeartIcon };
