import OrderCard from "../../components/orderCards/orderCard/orderCard";
import ReadyCard from "../../components/orderCards/readyCard/readyCard";
import RowCard from "../../components/orderCards/rowCard/rowCard";
import {
  FlexRow,
  Typography,
  SectionRole,
  IneerSection,
} from "../../Global.style";
import { OderBox, OrdCol, OrdElm } from "./orderPage.style";
import { useDrop } from "react-dnd";
import { useState } from "react";
const OrderList = [{ id: "158" }, { id: "536" }, { id: "840" }];
function OrderPage() {
  const [outgoing, setOutgoing] = useState([]);
  const [incoming, setIncoming] = useState([...OrderList]);

  // eslint-disable-next-line no-unused-vars
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => swapCol(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const swapCol = (id) => {
    const filteredList = incoming.filter((i) => id === i.id);
    const newList = incoming.filter((i) => id !== i.id);
    setOutgoing((outgoing) => [...outgoing, filteredList[0]]);
    setIncoming([...newList]);
  };
  return (
    <SectionRole>
      <IneerSection>
        <OderBox>
          <FlexRow style={{ height: "50px" }}>
            <OrdElm>Order Mangemant</OrdElm>
            <OrdElm active="true">Order Dispatch</OrdElm>
          </FlexRow>
          <FlexRow style={{ alignItems: "start" }}>
            <OrdCol>
              <Typography
                fontW="700"
                fontSize="16"
                style={{ marginBottom: "1rem", color: "#000" }}
              >
                Incoming 2
              </Typography>
              {incoming.map((item) => (
                <OrderCard key={item.id} id={item.id} />
              ))}
            </OrdCol>
            <OrdCol ref={drop}>
              <Typography
                fontW="700"
                fontSize="16"
                style={{ marginBottom: "1rem", color: "#000" }}
              >
                Outgoing 1
              </Typography>
              {outgoing.map((item) => (
                <OrderCard key={item.id} id={item.id} />
              ))}
              <RowCard />
              <RowCard />
            </OrdCol>
            <OrdCol width="106px">
              <Typography
                fontW="700"
                fontSize="16"
                style={{ marginBottom: "1rem", color: "#000" }}
              >
                Ready
              </Typography>
              <ReadyCard />
              <ReadyCard />
            </OrdCol>
          </FlexRow>
        </OderBox>
      </IneerSection>
    </SectionRole>
  );
}
export default OrderPage;
