import styled from "styled-components";
import { FlexCol } from "../../../Global.style";

export const BoxCard = styled(FlexCol)`
  align-items: center;
  width: 93px;
  background: ${({ theme }) => theme.body};
  border-radius: 5px;
  box-shadow: 0px 2px 20px #08091e1a;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;
