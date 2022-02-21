import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import ExternalLink from "../../components/ExternalLink";
import { getBlergById } from "../../providers/blerg";
import { styled } from "../../theme/stitches.config";
import { Trait } from "../../types";

const BlergDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const blerg = getBlergById(id as string);

  return (
    <div>
      <Head>
        <title>Blerg #{id}</title>
      </Head>
      <Main>
        <StartColumn>
          <StartColumnContentContainer>
            <BlergImageContainer>
              <BlergImage src={blerg?.imageUrl}></BlergImage>
            </BlergImageContainer>
            <DownloadAssetButton>Download Asset</DownloadAssetButton>
          </StartColumnContentContainer>
        </StartColumn>
        <EndColumn>
          <TitleSection>
            <h2>#{id}</h2>
            <p>Rank {blerg?.rank}</p>
          </TitleSection>

          <TraitsSection>
            <SubTitle>Traits</SubTitle>

            <Table>
              <TableHeader>
                <tr>
                  <th>Trait Type</th>
                  <th>Trait Value</th>
                  <th>Percent Of Blergs That Have This Trait</th>
                  <th>Number Of Blergs That Have This Trait</th>
                </tr>
              </TableHeader>
              <tbody>
                {blerg?.traits.map((trait) => (
                  <TraitRow key={trait.trait_type} trait={trait}></TraitRow>
                ))}
              </tbody>
            </Table>
          </TraitsSection>

          <ActionsSection>
            <ExternalLink
              href={`https://opensea.io/assets/0xcf0951ab291c5aeea59fa99f088a0baaa78b47db/${id}`}
              target="_blank"
            >
              Opensea
            </ExternalLink>
            <ExternalLink
              href={`https://etherscan.io/token/0xcf0951ab291c5aeea59fa99f088a0baaa78b47db?a=${id}`}
              target="_blank"
            >
              Etherscan
            </ExternalLink>
          </ActionsSection>
        </EndColumn>
      </Main>
    </div>
  );
};

export default BlergDetailPage;

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",

  "> *:first-child": {
    paddingTop: "0px",
    height: "35vh",
  },

  "> *:nth-child(2)": {
    paddingTop: "80px",
  },

  "@bp1": {
    display: "flex",
    flexDirection: "column",
    "> *:first-child": {
      paddingTop: "40px",
      height: "60vh",
    },
    "> *:nth-child(2)": {
      paddingTop: "140px",
    },
  },

  "@bp2": {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    "> *:first-child": {
      paddingTop: "205px",
      height: "100vh",
    },
    "> *:nth-child(2)": {
      paddingTop: "140px",
    },
  },
});

const StartColumn = styled("div", {
  backgroundColor: "$red",
  position: "relative",
  display: "flex",
  justifyContent: "center",

  "@bp2": {
    display: "initial",
  },
});

const EndColumn = styled("div", {
  padding: "40px 8px",
  "> section": {
    width: "100%",
  },

  "@bp1": {
    padding: "120px 32px",
  },
  "@bp2": {
    padding: 0,
    marginLeft: "120px",
    paddingRight: "120px",
    "> section": {
      width: 600,
      margin: "0 auto",
    },
  },
});

const StartColumnContentContainer = styled("div", {
  marginTop: "5vh",
  position: "absolute",
  display: "flex",
  justifyContent: "center",

  "@bp1": {
    height: 500,
    width: 500,
    marginTop: "5vh",
  },
  "@bp2": {
    right: -76,
  },
});

const BlergImageContainer = styled("div", {
  height: 300,
  width: 300,
  border: "8px solid $black",
  borderRadius: 12,
  overflow: "hidden",

  "@bp1": {
    height: 500,
    width: 500,
  },
});

const BlergImage = styled("img", {
  height: "100%",
  width: "100%",
});

const DownloadAssetButton = styled(Button, {
  position: "absolute",
  bottom: "8px",
  textTransform: "uppercase",
  padding: "24px 20px",

  "@bp2": {
    bottom: "calc(-40px - 92px)",
  },
});

const TitleSection = styled("section", {
  textAlign: "center",

  h2: {
    fontSize: "40px",
    margin: 0,
    marginBottom: "8px",
  },
  p: {
    fontSize: "16px",
    fontWeight: 500,
    margin: 0,
  },
});

const TraitsSection = styled("section", {
  paddingTop: "40px",
});

const ActionsSection = styled("section", {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: 40,
});

const SubTitle = styled("h3", {
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  margin: 0,
});

const TableHeader = styled("thead", {
  visuallyHidden: "",
});

const Table = styled("table", {
  width: "100%",
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: 500,

  "tr > td:first-child": {
    color: "$gray400",
    fontWeight: 400,
    width: "14ch",
  },
  "tr > td:nth-child(2)": {
    color: "$black",
    fontWeight: 900,
  },
  "tr > td:nth-child(3)": {
    textAlign: "right",
  },
  "tr > td:nth-child(4)": {
    color: "$gray400",
    fontWeight: 500,
    textAlign: "right",
    width: "5ch",
  },
});

const TraitRow = ({
  trait: { trait_type, value, trait_count, percentHave },
}: {
  trait: Trait;
}) => {
  return (
    <tr key={trait_type}>
      <td>{trait_type}</td>
      <td>{value}</td>
      <td>{(percentHave * 100).toFixed(1)}%</td>
      <td>({trait_count})</td>
    </tr>
  );
};
