import Head from "next/head";
import Styles from "../styles/Home.module.css"

export default function Home() {
  let title = "tomosta";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={Styles.mytitle} style={{ backgroundColor: `#9f9` }}>
        {title}
      </h1>
      <p>学ぶをちゃんと</p>
      <style jsx>
        {`
          h1 {
            color: white;
          }

        `}
      </style>
    </>
  );
}
