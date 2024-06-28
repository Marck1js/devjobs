import Image from "next/image";
import { GetServerSideProps } from "next";

import styles from "./page.module.css";
import Card from "@/components/Card";
import { Root, Root2 } from "@/types";
import ContentCard from "@/components/ContentCard";
import Header from "@/components/header/Header";
import FormSearch from "@/components/formSearch/FormSearch";
import Nav from "@/components/nav/Nav";
import LoadMore from "@/components/useclient/loadMore/LoadMore";
import CompanySite from "@/components/companySite/CompanySite";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Header>
        <FormSearch />
      </Header>
      <ContentCard data={data} />
      <LoadMore />
    </>
  );
}

async function getData() {
  const res = await fetch("http://localhost:53447"); // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
