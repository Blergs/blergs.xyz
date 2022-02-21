import { styled } from "../theme/stitches.config";

const ExternalLink = styled("a", {
  backgroundColor: "$yellow",
  color: "$black",
  borderRadius: "9999px",
  fontSize: "20px",
  lineHeight: "28px",
  padding: "10px 20px",
  border: "8px solid $black",
  cursor: "pointer",
});

export default ExternalLink;