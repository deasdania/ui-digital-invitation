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
      <main className={styles.main}>
        <section className="container-home">
          <div className="container-home-image" id="moon_img">
            <Image
              src={MoonImg}
              alt="moon_img"
              className="container-home-image"
            />
          </div>
          <div className="container-home-image" id="cloud_img">
            <Image
              src={CloudImg}
              alt="cloud_img"
              className="container-home-image"
            />
          </div>
          <div className="container-home-image" id="back_img">
            <Image sizes="100vw" src={BackImg} alt="back_img" />
          </div>
          <div className="container-home-image" id="front_img">
            <Image
              src={FrontImg}
              alt="front_img"
              className="container-home-image"
              sizes="100vw"
            />
          </div>
        </section>
        <section>
          <h3>PARALAX</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ducimus, sapiente atque similique assumenda consectetur distinctio
            recusandae maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ducimus, sapiente atque similique assumenda consectetur distinctio
            recusandae maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ducimus, sapiente atque similique assumenda consectetur distinctio
            recusandae maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ducimus, sapiente atque similique assumenda consectetur distinctio
            recusandae maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ducimus, sapiente atque similique assumenda consectetur distinctio
            recusandae maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rerum ducimus, sapiente atque
            similique assumenda consectetur distinctio recusandae maxime impedit
            non, quia provident incidunt nostrum natus praesentium consequatur
            sequi omnis. Quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum ducimus, sapiente atque similique assumenda
            consectetur distinctio recusandae maxime impedit non, quia provident
            incidunt nostrum natus praesentium consequatur sequi omnis.
            Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum ducimus, sapiente atque similique assumenda consectetur
            distinctio recusandae maxime impedit non, quia provident incidunt
            nostrum natus praesentium consequatur sequi omnis. Quibusdam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus,
            sapiente atque similique assumenda consectetur distinctio recusandae
            maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rerum ducimus, sapiente atque
            similique assumenda consectetur distinctio recusandae maxime impedit
            non, quia provident incidunt nostrum natus praesentium consequatur
            sequi omnis. Quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum ducimus, sapiente atque similique assumenda
            consectetur distinctio recusandae maxime impedit non, quia provident
            incidunt nostrum natus praesentium consequatur sequi omnis.
            Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum ducimus, sapiente atque similique assumenda consectetur
            distinctio recusandae maxime impedit non, quia provident incidunt
            nostrum natus praesentium consequatur sequi omnis. Quibusdam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus,
            sapiente atque similique assumenda consectetur distinctio recusandae
            maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rerum ducimus, sapiente atque
            similique assumenda consectetur distinctio recusandae maxime impedit
            non, quia provident incidunt nostrum natus praesentium consequatur
            sequi omnis. Quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum ducimus, sapiente atque similique assumenda
            consectetur distinctio recusandae maxime impedit non, quia provident
            incidunt nostrum natus praesentium consequatur sequi omnis.
            Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum ducimus, sapiente atque similique assumenda consectetur
            distinctio recusandae maxime impedit non, quia provident incidunt
            nostrum natus praesentium consequatur sequi omnis. Quibusdam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus,
            sapiente atque similique assumenda consectetur distinctio recusandae
            maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rerum ducimus, sapiente atque
            similique assumenda consectetur distinctio recusandae maxime impedit
            non, quia provident incidunt nostrum natus praesentium consequatur
            sequi omnis. Quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum ducimus, sapiente atque similique assumenda
            consectetur distinctio recusandae maxime impedit non, quia provident
            incidunt nostrum natus praesentium consequatur sequi omnis.
            Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum ducimus, sapiente atque similique assumenda consectetur
            distinctio recusandae maxime impedit non, quia provident incidunt
            nostrum natus praesentium consequatur sequi omnis. Quibusdam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus,
            sapiente atque similique assumenda consectetur distinctio recusandae
            maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rerum ducimus, sapiente atque
            similique assumenda consectetur distinctio recusandae maxime impedit
            non, quia provident incidunt nostrum natus praesentium consequatur
            sequi omnis. Quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum ducimus, sapiente atque similique assumenda
            consectetur distinctio recusandae maxime impedit non, quia provident
            incidunt nostrum natus praesentium consequatur sequi omnis.
            Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum ducimus, sapiente atque similique assumenda consectetur
            distinctio recusandae maxime impedit non, quia provident incidunt
            nostrum natus praesentium consequatur sequi omnis. Quibusdam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus,
            sapiente atque similique assumenda consectetur distinctio recusandae
            maxime impedit non, quia provident incidunt nostrum natus
            praesentium consequatur sequi omnis. Quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Rerum ducimus, sapiente atque
            similique assumenda consectetur distinctio recusandae maxime impedit
            non, quia provident incidunt nostrum natus praesentium consequatur
            sequi omnis. Quibusdam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum ducimus, sapiente atque similique assumenda
            consectetur distinctio recusandae maxime impedit non, quia provident
            incidunt nostrum natus praesentium consequatur sequi omnis.
            Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Rerum ducimus, sapiente atque similique assumenda consectetur
            distinctio recusandae maxime impedit non, quia provident incidunt
            nostrum natus praesentium consequatur sequi omnis. Quibusdam.
          </p>
        </section>
      </main>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
