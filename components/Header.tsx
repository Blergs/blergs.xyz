import { styled } from "../theme/stitches.config";
import Button from "./Button";

const Header = styled("header", {
  padding: "32px 35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@bp1": {
    padding: "75px 140px",
  },
});

const HeaderComponent = () => {
  return (
    <Header>
      <div>LOGO</div>

      <div>
        <Button>Connect Wallet</Button>
      </div>
    </Header>
  );
};
export default HeaderComponent;
