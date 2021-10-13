



import styled from 'styled-components';
import { FlexBox, FlexRow, SectionRole } from '../../Global.style';

export const TapSection= styled(FlexRow)`
    height:50px;
    width:100%;

`;
export const CustomRole= styled(SectionRole)`
    border-top:1px solid gray;
    border-bottom:1px solid gray;
`;

export const ElmentTap= styled (FlexBox)`
    font-size: 16px;
    height:100%;
    ${(props) => (props.active ? ("color:#15BBF9 ; border-bottom: 2px solid #15BBF9; font-weight:700;") : ("color: #707070"))}; 
`
