


import styled from 'styled-components';
import { FlexBox, FlexCol } from '../../Global.style';

export const OderBox= styled(FlexCol)`
    width:100%;
`;
export const OrdCol = styled (FlexCol)`
    width: ${(props) => (props.width ? props.width : "375px")};
    padding:0.5rem;
    background:#E4E4E4;
    min-height:600px;
    align-items: center;
    justify-content: flex-start;
    border-radius:10px;

`
export const OrdElm= styled(FlexBox)`
    width:49%;
    height:35px;
    border: 1px solid gray;
    border-radius:10px;
    background:${(props)=>(props.active && "#E4E4E4")};
    ${(props)=>(props.active && "border: none")}
`;