import OrderCard from "../../components/orderCards/orderCard/orderCard";
import ReadyCard from "../../components/orderCards/readyCard/readyCard";
import RowCard from "../../components/orderCards/rowCard/rowCard";
import {
  FlexRow,
  Typography,
  SectionRole,
  IneerSection,
} from "../../Global.style";
import {OderBox,OrdCol,OrdElm} from './orderPage.style';
function OrderPage() {
  return (
    <SectionRole>
      <IneerSection>
      <OderBox>
        <FlexRow style={{height:"50px"}}>
          <OrdElm>Order Mangemant</OrdElm>
          <OrdElm active="true">Order Dispatch</OrdElm>
        </FlexRow>
        <FlexRow style={{alignItems: "start"}}>
            <OrdCol>
                <Typography fontW="700" fontSize="16" style={{marginBottom:"1rem"}}>Incoming 2</Typography>
                <OrderCard/>
                <OrderCard/>
            </OrdCol>
            <OrdCol>
                <Typography fontW="700" fontSize="16" style={{marginBottom:"1rem"}}>Outgoing 1</Typography>
                <OrderCard/>
                <RowCard/>
                <RowCard/>
            </OrdCol>
            <OrdCol width="106px">
                <Typography fontW="700" fontSize="16" style={{marginBottom:"1rem"}}>Ready</Typography>
                <ReadyCard/>
                <ReadyCard/>
            </OrdCol>
        </FlexRow>
        </OderBox>
      </IneerSection>
    </SectionRole>
  );
}
export default OrderPage;
