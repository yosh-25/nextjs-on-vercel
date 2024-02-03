import Head from "next/head";
import Link from "next/link";
import Content from "./components/content";
import useSWR from "swr";

import Styles from "../styles/Home.module.css";
import Header from "./components/header";


export default function Home() {
  let title = "tomosta";
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error} = useSWR('/api/message', fetcher);
  if(error) return <div>failed to load</div>
  if(!data) return <div>loading...</div>

  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} />
      <p>{data.message}</p>
      <div>
        <Link href="/about">About</Link>
      </div>
      <style jsx>
        {`
          h1 {
            color: white;
          }
        `}
      </style>
    </Content>
  );
}
