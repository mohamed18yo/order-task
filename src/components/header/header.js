



import { SectionRole,IneerSection,Typography } from "../../Global.style";
import {HeaderSection} from './header.style'

function Header(){
    return <SectionRole>
                <IneerSection>
                    <HeaderSection>
                        <Typography>Jul 31, 2021 </Typography>
                        <img src="/logo.png" />
                        <Typography>User</Typography>
                    </HeaderSection>
                    
                </IneerSection>
    </SectionRole>
}
export default Header;