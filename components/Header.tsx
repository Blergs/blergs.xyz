import { styled } from "../theme/stitches.config";
import Button from "./Button";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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

  variants: {
    page: {
      detailsPage: {
        zIndex: 1,

        "@bp2": {
          position: "fixed",
          top: 0,
          width: "100%",
        },
      },
    },
  },
});

const EndingContainer = styled("div", {
  display: "none",

  "@bp2": {
    display: "block",
  },
});

const HeaderComponent = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <Header page={isHome ? undefined : "detailsPage"}>
      <Link href="/" passHref>
        <a>
          <Image src={logo} alt="Blergs Logo" width={277} />
        </a>
      </Link>

      <EndingContainer>
        <Button>Connect Wallet</Button>
      </EndingContainer>
    </Header>
  );
};
export default HeaderComponent;
