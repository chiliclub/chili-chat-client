import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>chili-club</title>
        <meta name="description" content="live chatting using Socket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>chiliclub-client</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default Home;
