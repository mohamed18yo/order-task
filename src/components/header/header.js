import { SectionRole, IneerSection, Typography, Img } from "../../Global.style";
import { HeaderSection } from "./header.style";

function Header(props) {
  return (
    <SectionRole>
      <IneerSection>
        <HeaderSection>
          <Typography>Jul 31, 2021 </Typography>
          <Img src="/logo.png" />
          <Typography
            fontW={"700"}
            fontSize="20"
            style={{ cursor: "pointer" }}
            onClick={props.Toggole}
          >
            {props.Theme === "dark" ? "🌙" : "🌞 "}
          </Typography>
        </HeaderSection>
      </IneerSection>
    </SectionRole>
  );
}
export default Header;
