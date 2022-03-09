import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Provider, NETWORKS } from "@web3-ui/core";
import { getDefaultProvider } from "ethers";
import { NftProvider } from "use-nft";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NftProvider
      fetcher={[
        "ethers",
        {
          provider: getDefaultProvider("mainnet", {
            etherscan: process.env.NEXT_PUBLIC_ETHER_SCAN_API_KEY,
          }),
        },
      ]}
    >
      <Provider network={NETWORKS.mainnet}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </NftProvider>
  );
}

export default MyApp;
