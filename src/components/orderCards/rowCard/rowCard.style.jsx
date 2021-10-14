



import styled from 'styled-components';
import { FlexRow } from '../../../Global.style';


export const BoxCard= styled(FlexRow)`
    align-items: center;
    width:343px;
    height:85px;
    background: ${({theme}) => theme.body};;
    border-radius:5px;
    box-shadow: 0px 2px 20px #08091E1A;
    padding: 1rem ;
    box-sizing:border-box;
    margin-bottom: 1rem;
    `;