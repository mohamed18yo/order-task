import { FlexCol, Img, Typography } from "../../../Global.style";
import { DivIcon } from "../orderCard/orderCard.style";

import { BoxCard } from "./rowCard.style";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function RowCard() {
  return (
    <BoxCard>
     <div style={{ width: 60, height: 60 }}>
          <CircularProgressbarWithChildren  value={20}>
               <Typography fontW="600" fontSize="25">
                5 <br />
                <Typography color="#9B9B9B" fontSize="12">14:00</Typography>
                </Typography>
          </CircularProgressbarWithChildren>
        </div>
      <FlexCol>
      <Typography fontSize="18px" fontW="700">#326  Leandro M.</Typography>
      <Typography fontSize="14px" color="#9B9B9B">+358414361234</Typography>
      </FlexCol>
      <FlexCol style={{alignItems:'center'}}>
      <DivIcon>
          <Img
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
