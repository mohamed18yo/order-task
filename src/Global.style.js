import styled from "styled-components";

import { createGlobalStyle} from "styled-components";

export const GStyle=createGlobalStyle`
  body{
    background: ${({theme}) => theme.body};
    color:${({theme}) => theme.text}
  }
`;
export const darkTheme = {
  body: '#FFF',
  text: '#121212',
  toggleBorder: '#FFF',
  background: '#363537',
  cusColor:"#000",
}
export const lightTheme = {
  body: '#121212',
  text: '#fff',
  toggleBorder: '#6B8096',
  background: '#999',
  cusColor:"#fff",
}

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexCol = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
export const FlexRow = styled(FlexBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Container = styled("div")`
  max-width: 1920px;
  width: 100%;
`;

export const MainComponent = styled("main")`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const SectionRole = styled("div")` 
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  background: ${(props) => props.color};
`;
export const IneerSection = styled("div")`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;
export const Box = styled("div")`
  display: flex;
`;
/**
 * tesst
 * 
 */
export const Typography = styled("p")`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  text-decoration: ${(props) => (props.isThrough ? "line-through" : "none")};
  width: ${(props) => props.width};
  font-weight: ${(props) => props.fontW};
  margin-top:0;
  margin-bottom:0;
  
`;
export const ProductImg = styled("img")`
  width: ${(props) => (props.width ? props.width : "200px")};
  object-fit: cover;
`;
export const PrivetButton = styled("Button")`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #000;
  cursor: pointer;
  width: 220px;
  height: 56px;
  border: 3px solid #06aefc;
  border-radius: 20px;
  font-size: 22px;
letter-spacing: 0.88px;
color: #242424;
text-transform: capitalize;
opacity: 1;
  /* &:hover {
    background: green;
  } */
`;
export const Line = styled("hr")`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "1px")};
  color: ${(props) => (props.color ? props.color : "#000")};
`;
export const Input=styled('input')`
    width: 398px;
    height: 40px;
    border: 1px solid #242424;
    border-radius: 6px;
    opacity: 1;
`
export const Counter = styled(FlexRow)`
  padding:1rem;
  background: #fff;
  width: 204px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;
export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 6px solid #29E881;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  animation: spin  ease-in-out infinite;
  -webkit-animation: spin  ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(260deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(260deg);
    }
  }
`;

export const Img= styled('img')`

`;

export const ErrorMsg = styled("span")`
  color: red;
  margin: 14px 0 14px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 17px;
`;
