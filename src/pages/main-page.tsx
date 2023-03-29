import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Seo from '@/components/Seo';

export default function Home() {
  return (
    <div className="text-black">
      <Seo
        title="Home: Dripper News"
        description="Welcome Dripper News homepage."
        canonical="https://nine4-2.vercel.app/"
        openGraph={{
          url: "https://nine4-2.vercel.app/",
        }}
      />
      <Head>
        <title>Dripper News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}