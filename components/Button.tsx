import { styled } from "../theme/stitches.config";

const Button = styled("button", {
  backgroundColor: "$yellow",
  color: "$black",
  borderRadius: "9999px",
  fontSize: "20px",
  lineHeight: "28px",
  padding: "10px 20px",
  border: "4px solid $black",
  cursor: "pointer",
  fontFamily: "$header",
});

export default Button;
