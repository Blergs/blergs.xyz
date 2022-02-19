import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ExternalLink from "../../components/ExternalLink";
import { getBlergById } from "../../providers/blerg";
import { styled } from "../../theme/stitches.config";

const BlergDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const blerg = getBlergById(id as string);

  if (blerg === undefined) {
    router.push("/");
  }

  return (
    <div>
      <Head>
        <title>Blerg #{id}</title>
      </Head>
      <Main>
        <StartColumn>
          <BlergImage src={blerg?.imageUrl}></BlergImage>
        </StartColumn>
        <EndColumn>
          <section>
            <h2>#{id}</h2>
            <p>Rank {blerg?.rank}</p>
          </section>

          <section>
            <h3>Traits</h3>

            <table>
              <thead>
                <tr>
                  <th>Trait Type</th>
                  <th>Trait Value</th>
                  <th>Percent Of Blergs That Have This Trait</th>
                  <th>Number Of Blergs That Have This Trait</th>
                </tr>
              </thead>
              <tbody>
                {blerg?.traits.map(
                  ({ trait_type, value, trait_count, percentHave }) => (
                    <tr key={trait_type}>
                      <td>{trait_type}</td>
                      <td>{value}</td>
                      <td>{percentHave}</td>
                      <td>({trait_count})</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </section>

          <section>
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
          </section>
        </EndColumn>
      </Main>
    </div>
  );
};

export default BlergDetailPage;

const Main = styled("main", {});

const StartColumn = styled("div", {});

const EndColumn = styled("div", {});

const BlergImage = styled("img", {
  height: 300,
});
