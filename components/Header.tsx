import { styled } from "../theme/stitches.config";
import Button from "./Button";
import logo from "../public/logo.svg";
import Image from "next/image";

const Header = styled("header", {
  padding: "32px 35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@bp1": {
    padding: "56px 68px",
  },
  "@bp2": {
    padding: "56px 40px",
    justifyContent: "space-between",
  },
  "@bp3": {
    padding: "56px 140px",
    justifyContent: "space-between",
  },
});

const EndingContainer = styled("div", {
  display: "none",

  "@bp2": {
    display: "block",
  },
});

const HeaderComponent = () => {
  return (
    <Header>
      <Image src={logo} alt="Blergs Logo" width={277} />

      <EndingContainer>
        <Button>Connect Wallet</Button>
      </EndingContainer>
    </Header>
  );
};
export default HeaderComponent;
