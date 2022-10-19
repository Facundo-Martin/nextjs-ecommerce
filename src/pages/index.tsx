import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import RenderHomepage from "../components/Home/RenderHomepage";
import Layout from "../components/Layout/Layout";
import { Product } from "../interfaces";

type HomeProps = {
  products: Product[];
};

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <>
      <Head>Ecommerce app</Head>
      <ClientOnly>
        <Layout>
          <RenderHomepage products={products} />
        </Layout>
      </ClientOnly>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
};
