import Head from "next/head";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import Category from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import Search from "@/components/Search";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // add your Realm App Id to the .env.local file
      const REALM_APP_ID = "products-rlpht";
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allProducts = await user.functions.getAllProducts();
        setProducts(allProducts); // No need for the extra arrow function
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData(); // Invoke the async function immediately
  }, []);
  

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
        {/* <Container> */}
          <Search/>
          <Category
            category="All Products"
            categoryCount={`${products.length} Products`}
          />
          <Products products={products} />
          <Pagination />
        {/* </Container> */}
        <Footer />
      </div>
    </div>
  );
}
