import { styled } from "../theme/stitches.config";

const Grid = styled("section", {
  display: "grid",
  gridTemplateRows: "288px",
  gridTemplateColumns: "repeat(auto-fill, minmax(288px, 1fr))",
  gap: "8px",
  width: "100%",
  background: "$black",
  color: "$white",
});

export default Grid;
