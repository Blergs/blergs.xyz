import { styled } from "../theme/stitches.config";
import Button from "./Button";
import logo from "../public/logo.svg";
import Image from "next/image";

const Header = styled("header", {
  padding: "32px 35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@bp1": {
    padding: "56px 68px",
  },
  "@bp2": {
    padding: "56px 40px",
  },
  "@bp3": {
    padding: "56px 140px",
  },
});

const HeaderComponent = () => {
  return (
    <Header>
      <Image src={logo} alt="Blergs Logo" width={277} />

      <div>
        <Button>Connect Wallet</Button>
      </div>
    </Header>
  );
};
export default HeaderComponent;
