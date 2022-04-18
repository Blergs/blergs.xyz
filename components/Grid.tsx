import { styled } from "../theme/stitches.config";

const Grid = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "4px",
  width: "100%",
  background: "$black",
  color: "$white",
});

export default Grid;
