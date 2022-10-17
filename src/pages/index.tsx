import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>Ecommerce app</Head>
      <Layout>
        <div className="font-bold text-4xl">Welcome</div>
      </Layout>
    </>
  );
};

export default Home;
