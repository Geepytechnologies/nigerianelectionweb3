import Head from "next/head";

export const Header = () => {
  return (
    <Head>
      <title>Nigerian Election</title>
      <meta
        name="description"
        content="Vote for your favorite Nigerian presidential candidates securely and transparently on the blockchain with Nigerian Election. Our decentralized platform ensures the integrity and accuracy of the voting process, giving every citizen a voice in shaping the future of Nigeria. Join the movement and cast your vote today."
      />
      <meta charSet="UTF-8"></meta>
      <meta
        name="keywords"
        content="elections, voting, web3 voting, blockchain voting system, Nigerian elections"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/circular-min.png" />
    </Head>
  );
};
