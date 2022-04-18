import { styled } from "../theme/stitches.config";

const ExternalLink = styled("a", {
  backgroundColor: "$yellow100",
  fontFamily: "$header",
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

  variants: {
    type: {
      primary: {
        backgroundColor: "$yellow",
        color: "$black",
        borderRadius: "9999px",
        fontSize: "20px",
        lineHeight: "28px",
        padding: "10px 20px",
        border: "4px solid $black",
        cursor: "pointer",
        fontFamily: "$header",
      },
    },
  },
});

export default ExternalLink;
