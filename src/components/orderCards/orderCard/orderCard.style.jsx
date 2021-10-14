


import styled from 'styled-components';
import { FlexBox, FlexCol } from '../../../Global.style';

export const OrederSection= styled(FlexCol)`
    width:343px;
    background:${({theme}) => theme.body};
    border-radius:5px;
    align-items: center;
    padding:1rem;
    box-sizing:border-box;
    box-shadow: 0px 2px 20px #08091E1A;
    margin-bottom:1rem;
    color:${({theme}) => theme.cusColor};
`;

export const DivMessage= styled('p')`
    background:#FFEED0;
    color:#806840;
    border-radius:5px;
    width:315px;
    height:73px;
    font-size:14;
`;

export const Button = styled("Button")`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #15BBF9;
  color: #000;
  cursor: pointer;
  width: 220px;
  height: 49px;
  border: none;
  /* border: 3px solid #06aefc; */
  border-radius: 5px;
  font-size: 16px;
  letter-spacing: 0.88px;
  color: #fff;
  text-transform: capitalize;
  opacity: 1;
`;

export const DivIcon= styled(FlexBox)`
  height:30px;
  width:30px;
  border-radius:50%;
  background: #D3F2FE;

`