import type { NextPage } from "next";
import Head from "next/head";

import Image from "next/image";

import MoonImg from "../assets/images/moon.svg";
import FrontImg from "../assets/images/front.svg";
import BackImg from "../assets/images/back.svg";
import CloudImg from "../assets/images/cloud.svg";

import { useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Header />
      <main className={styles.main}>  </main>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
