import styled from "styled-components";
type SliceProps = {
    value : number;
}

export const Circle = styled.ul`
  position: relative;
  border: 1px solid black;
  padding: 0;
  margin: 1em auto;
  width: 20em;
  height: 20em;
  border-radius: 50%;
  list-style: none;
  overflow: hidden;
  
`;

export const SliceWrapper = styled.li<SliceProps>`
  overflow: hidden;
  position: absolute;
  top: 0; right: 0;
  width: 50%; height: 50%;
  transform-origin: 0% 100%;
  
  &:nth-child(1) {
    -webkit-transform: rotate(0deg) skewY(-60deg);
    -ms-transform: rotate(0deg) skewY(-60deg);
    transform: rotate(0deg) skewY(-60deg);
    background: ${(props) => (props.value == 1 ? "blue" : "")};
  }
  
    &:nth-child(2) {
      -webkit-transform: rotate(30deg) skewY(-60deg);
      -ms-transform: rotate(30deg) skewY(-60deg);
      transform: rotate(30deg) skewY(-60deg);
      background: ${(props) => (props.value == 2 ? "blue" : "")};
    }
    &:nth-child(3) {
      -webkit-transform: rotate(60deg) skewY(-60deg);
      -ms-transform: rotate(60deg) skewY(-60deg);
      transform: rotate(60deg) skewY(-60deg);
      background: ${(props) => (props.value == 3 ? "blue" : "")};
    
    }
    &:nth-child(4) {
      -webkit-transform: rotate(90deg) skewY(-60deg);
      -ms-transform: rotate(90deg) skewY(-60deg);
      transform: rotate(90deg) skewY(-60deg);
      background: ${(props) => (props.value == 4 ? "blue" : "")};
    
    }
    &:nth-child(5) {
      -webkit-transform: rotate(120deg) skewY(-60deg);
      -ms-transform: rotate(120deg) skewY(-60deg);
      transform: rotate(120deg) skewY(-60deg);
      background: ${(props) => (props.value == 5 ? "blue" : "")};
    
    }
    &:nth-child(6) {
      -webkit-transform: rotate(150deg) skewY(-60deg);
      -ms-transform: rotate(150deg) skewY(-60deg);
      transform: rotate(150deg) skewY(-60deg);
      background: ${(props) => (props.value == 6 ? "blue" : "")};
    
    }
    &:nth-child(7) {
      -webkit-transform: rotate(180deg) skewY(-60deg);
      -ms-transform: rotate(180deg) skewY(-60deg);
      transform: rotate(180deg) skewY(-60deg);
      background: ${(props) => (props.value == 7 ? "blue" : "")};
    
    }
    &:nth-child(8) {
      -webkit-transform: rotate(210deg) skewY(-60deg);
      -ms-transform: rotate(210deg) skewY(-60deg);
      transform: rotate(210deg) skewY(-60deg);
      background: ${(props) => (props.value == 8 ? "blue" : "")};
    
    }
    &:nth-child(9) {
      -webkit-transform: rotate(240deg) skewY(-60deg);
      -ms-transform: rotate(240deg) skewY(-60deg);
      transform: rotate(240deg) skewY(-60deg);
      background: ${(props) => (props.value == 9 ? "blue" : "")};
    
    }
    &:nth-child(10) {
      -webkit-transform: rotate(270deg) skewY(-60deg);
      -ms-transform: rotate(270deg) skewY(-60deg);
      transform: rotate(270deg) skewY(-60deg);
      background: ${(props) => (props.value == 10 ? "blue" : "")};
    
    }
    &:nth-child(11) {
      -webkit-transform: rotate(300deg) skewY(-60deg);
      -ms-transform: rotate(300deg) skewY(-60deg);
      transform: rotate(300deg) skewY(-60deg);
      background: ${(props) => (props.value == 11 ? "blue" : "")};
    
    }
    &:nth-child(12) {
      -webkit-transform: rotate(330deg) skewY(-60deg);
      -ms-transform: rotate(330deg) skewY(-60deg);
      transform: rotate(330deg) skewY(-60deg);
      background: ${(props) => (props.value == 12 ? "blue" : "")};
    
    }
  
  .text {
  position: absolute;
  left: -100%;
  width: 200%; height: 200%;
  text-align: center;
  -webkit-transform: skewY(60deg) rotate(15deg);
  -ms-transform: skewY(60deg) rotate(15deg);
  transform: skewY(60deg) rotate(15deg);
  padding-top: 20px;
  
  
}
`