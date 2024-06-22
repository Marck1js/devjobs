import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
    <Card/>
    <Card color="#E54D25" company="blogr" kind="part time" time="20h" position="haskell and purescript dev" country="united states"/>
    <Card/>
    <Card/>
    <Card/>
    </>
  );
}
