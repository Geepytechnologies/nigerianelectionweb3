import "@/styles/globals.css";
import { ModalContextProvider } from "@/utils/ModalContext";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  // ConnectButton,
  lightTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { AppContextProvider } from "@/utils/AppContext";

const { chains, provider } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID! })]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <ModalContextProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={lightTheme({
              accentColor: "#c10622",
              accentColorForeground: "white",
              borderRadius: "medium",
              fontStack: "system",
            })}
          >
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </ModalContextProvider>
    </AppContextProvider>
  );
}
