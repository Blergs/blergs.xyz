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
      {/* <Image src={blerg.imageUrl} alt="" layout="fill" /> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <BlergImage src={blerg.imageUrl} alt="" />
    </Container>
  );
};

export default BlergPreview;

const BlergImage = styled("img", {
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
  transition: "transform 0.2s ease-in",
  h2: {
    margin: 0,
    marginBottom: 8,
  },
  p: {
    margin: 0,
  },
});

const Container = styled("div", {
  position: "relative",
  "&:hover": {
    [`${BlergImage}`]: {
      transform: "translateY(60px) scale(0.8)",
    },
    [`${TextContainer}`]: {
      transform: "translateY(20px)",
    },
  },
});
