import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrivyProvider } from "@privy-io/react-auth";
import {defineChain} from 'viem';

const bscTestnet = defineChain({
  id: 97,
  name: "BNB Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "tBNB",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://bsc-testnet-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://testnet.bscscan.com" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <PrivyProvider
    appId={process.env.REACT_APP_PRIVY_APP_ID}
    config={{
      defaultChain: bscTestnet,
      supportedChains: [bscTestnet],
      privyWalletOverride: {},
      embeddedWallets: {
        createOnLogin: "users-without-wallets",
      },
      appearance: {
        theme: "dark",
        accentColor: "#f0b90b",
        logo: "/logo.png", 
      },
    }}
  >
    <App />
  </PrivyProvider>
);