import React from "react";
import { BlergRarity } from "../types";
import Image from "next/image";
import { styled } from "../theme/stitches.config";

type Props = {
  blerg: BlergRarity;
};

const BlergPreview = ({ blerg }: Props) => {
  return (
    <Container>
      <TextContainer>
        <h2>#{blerg.tokenId}</h2>
        <p>Rank {blerg.rank}</p>
      </TextContainer>
      <BlergImage
        src={`/blerg_full_resolution/${blerg.tokenId}@2x.png`}
        alt=""
        width={425}
        height={425}
        // Prioritize loading the first 50 since these will probably be above the fold.
        priority={parseInt(blerg.tokenId, 10) < 50}
      />
    </Container>
  );
};

export default BlergPreview;

const BlergImage = styled(Image, {
  width: "100%",
  height: "100%",
  zIndex: 1,
  position: "relative",
  transition: "transform 0.2s ease-in",
});

const TextContainer = styled("div", {
  position: "absolute",
  zIndex: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transform: "translateY(-24px)",
  opacity: 0,
  transition: "opacity 0.2s ease-in, transform 0.2s ease-in",
  h2: {
    margin: 0,
    marginBottom: "4px",
    fontSize: "32px",
    lineHeight: "24px",
  },
  p: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "28px",
  },
});

const Container = styled("div", {
  position: "relative",
  "&:hover": {
    [`${BlergImage}`]: {
      transform: "translateY(60px) scale(0.8)",
    },
    [`${TextContainer}`]: {
      transform: "translateY(10px)",
      opacity: 1,
    },
  },
});
