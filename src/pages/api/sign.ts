import { sign } from "tweetnacl";
import { PublicKey } from "@solana/web3.js";
import bs58 from "bs58";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    res.status(200).json({ message: "Wallet verified" });
  } else {
    res.status(405).json({ message: "Only do POST" });
  }
}
