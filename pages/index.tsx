import Head from "next/head";
import Faucet from "../components/Faucet";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ventura Faucet</title>
        <meta name="description" content="Ventura Network Faucet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <Faucet />
      </main>
    </>
  );
}
