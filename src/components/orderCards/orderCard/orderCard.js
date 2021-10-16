import { FlexRow, Line, Typography, FlexCol, Img } from "../../../Global.style";

import { OrederSection, DivMessage, Button, DivIcon } from "./orderCard.style";
import { useDrag } from "react-dnd";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function OrderCard(props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id: props.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <OrederSection
      ref={drag}
      style={{ border: isDragging && "3px solid pink" }}
    >
      <FlexRow style={{ alignItems: "flex-start" }}>
        <FlexCol>
          <Typography
            style={{ marginBottom: "5px" }}
            color="#9B9B9B"
            fontSize="12"
          >
            Supplier:
          </Typography>
          <Img src="/ordImg.png" />
        </FlexCol>
        <FlexCol style={{ alignItems: "center" }}>
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbarWithChildren value={20}>
              <Typography fontW="700" fontSize="32">
                5 <br />
                <Typography color="#9B9B9B" fontSize="14">
                  14:00
                </Typography>
              </Typography>
            </CircularProgressbarWithChildren>
          </div>
          <Typography fontW="700">#{props.id} Leandro M.</Typography>
          <Typography color="#9B9B9B">+358414361234</Typography>
        </FlexCol>
        <DivIcon>
          <Img
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
