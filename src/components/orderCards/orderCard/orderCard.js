import {
  FlexRow,
  Line,
  Typography,
  FlexCol,
  SpinnerContainer,
} from "../../../Global.style";

import { OrederSection, DivMessage, Button, DivIcon } from "./orderCard.style";

function OrderCard() {
  return (
    <OrederSection>
      <FlexRow style={{ alignItems: "flex-start" }}>
        <FlexCol>
          <Typography
            style={{ marginBottom: "5px" }}
            color="#9B9B9B"
            fontSize="12"
          >
            Supplier:
          </Typography>
          <img src="/ordImg.png" />
        </FlexCol>
        <FlexCol style={{ alignItems: "center" }}>
          <SpinnerContainer>
            <Typography fontW="700" fontSize="36">
              5 <br />{" "}
              <Typography color="#9B9B9B" fontSize="14">
                14:00
              </Typography>
            </Typography>
          </SpinnerContainer>

          <Typography fontW="700">#326 Leandro M.</Typography>
          <Typography color="#9B9B9B">+358414361234</Typography>
        </FlexCol>
        <DivIcon>
          <img
            width="80%"
            src="https://icon-library.com/images/icon-resize/icon-resize-10.jpg"
          />
        </DivIcon>
      </FlexRow>
      <DivMessage>
        No onion please, I’m very allergic. It would be best if no onions was
        handled.
      </DivMessage>
      <FlexCol style={{ width: "100%", height: "77px" }}>
        <Typography fontW="700">1 x Americana</Typography>
        <Typography fontW="700">1 x Mexicana</Typography>
        <Typography fontW="700">1 x Hawaii</Typography>
        <Typography color="#9B9B9B">Extra capris</Typography>
      </FlexCol>

      <Line width="100%" />
      <Typography
        style={{ textAlign: "start", marginBottom: "1rem" }}
        width="100%"
        color="#9B9B9B"
      >
        41,00 €
      </Typography>
      <Button style={{ marginBottom: "1rem" }}>Ready to Deliver </Button>
      <Typography fontSize="16" fontW="700" color="red">
        Cancel
      </Typography>
    </OrederSection>
  );
}

export default OrderCard;
