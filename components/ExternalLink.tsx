import { styled } from "../theme/stitches.config";

const ExternalLink = styled("a", {
  backgroundColor: "$yellow100",
  color: "$red",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "28px",
  padding: "10px 40px",
  cursor: "pointer",
  borderRadius: 50,
  textTransform: "uppercase",
  display: "inline-block",
  minWidth: "100px",
  textAlign: "center",

  "@bp2": {
    minWidth: "242px",
  },
});

export default ExternalLink;
