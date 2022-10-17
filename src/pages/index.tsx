import type { NextPage } from "next";
import Head from "next/head";
import RenderHomepage from "../components/Home/RenderHomepage";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>Ecommerce app</Head>
      <Layout>
        <RenderHomepage />
      </Layout>
    </>
  );
};

export default Home;
