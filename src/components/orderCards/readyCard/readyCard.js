import { Line, Typography } from "../../../Global.style";
import { BoxCard } from "./readyCard.style";

function ReadyCard() {
  return (
    <BoxCard>
      <Typography fontW="700" fontSize="18px">#326 </Typography>
      <Typography fontSize="14px" color="#707070">
        Mae Smith
      </Typography>
      <Line width="100%" />
      <img src="/ordImg.png" />
      <Line width="100%" />
      <Typography fontSize="14px" color="#707070">
        Pickup in
      </Typography>
      <Typography fontSize="14px">1 Min </Typography>
    </BoxCard>
  );
}

export default ReadyCard;
