import { FlexCol, SpinnerContainer, Typography } from "../../../Global.style";
import { DivIcon } from "../orderCard/orderCard.style";

import { BoxCard } from "./rowCard.style";

function RowCard() {
  return (
    <BoxCard>
     <SpinnerContainer style={{width:"60px", height:"60px"}}>
            <Typography fontW="600" fontSize="16">
              5 <br />{" "}
              <Typography color="#9B9B9B" fontSize="12">
                14:00
              </Typography>
            </Typography>
      </SpinnerContainer>
      <FlexCol>
      <Typography fontSize="18px" fontW="700">#326  Leandro M.</Typography>
      <Typography fontSize="14px" color="#9B9B9B">+358414361234</Typography>
      </FlexCol>
      <FlexCol style={{alignItems:'center'}}>
      <DivIcon>
          <img
            width="80%"
            src="https://icon-library.com/images/icon-resize/icon-resize-10.jpg"
          />
        </DivIcon>
        <Typography fontSize="14px" color="#9B9B9B">8 Items</Typography>

      </FlexCol>
    </BoxCard>
  );
}

export default RowCard;
