import { useStockpile, useCreateUser } from "@stockpileprotocol/react_sdk";
import { AnchorWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useMemo } from "react";

export default function Home() {
  const anchorWallet = useAnchorWallet();
  const connection = useMemo(
    () => new Connection("https://api.devnet.solana.com", "confirmed"),
    []
  );
  const sdk = useStockpile(
    anchorWallet,
    connection,
    { preflightCommitment: "confirmed" },
    "devnet"
  );

  const { create, error, loading } = useCreateUser(sdk);

  return (
    <button
      onClick={() => {
        create(anchorWallet?.publicKey);
      }}
    >
      Create User
    </button>
  );
}
