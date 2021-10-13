


import { IneerSection} from "../../Global.style";
import {TapSection,CustomRole,ElmentTap } from './tap.style';

function Tap(){
    return <CustomRole>
                <IneerSection>
                <TapSection>
                    <ElmentTap color="#707070">Business insights</ElmentTap>
                    <ElmentTap>User</ElmentTap>
                    <ElmentTap>Accounts</ElmentTap>
                    <ElmentTap active="true">Orders</ElmentTap>
                    <ElmentTap>Menu editor</ElmentTap>
                    <ElmentTap>Reports</ElmentTap>
                    <ElmentTap>Setting</ElmentTap>
                </TapSection>
                </IneerSection>
     </CustomRole>
}
export default Tap;