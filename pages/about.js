import Head from "next/head";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FeatureSection from "@/components/About";
import { useRouter } from "next/router";

export default function About() {
  const { query } = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
       <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Assuming the CSS files are in the public directory */}
        <link rel="stylesheet" href="../../css/bootstrap.min.css" />
        <link rel="stylesheet" href="../../css/style.css" />
      </Head>
      <div className="bg-white w-full min-h-screen">
        <Header />
        <div style={{marginTop : "5%"}}>
          <FeatureSection/>
        </div>
        <Footer />
      </div>
    </div>
  );
}
