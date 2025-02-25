"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Title.module.css";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export function PrimaryTitle(props: any) {
  return (
    <h2 className={styles.PrimaryTitle} data-en="subtitle">
      {props.title}
    </h2>
  )
}

export function SecondaryTitle(props) {
  return (
    <div className={styles.SecondaryTitle}>
    <div>
      <h2>{props.title}<span>{props.en_title}</span></h2> 
    </div>
  </div>
  )
}

export function TertiaryTitle(props) {
  return (
    <div className={styles.TertiaryTitle}>
      <h2>{props.title}</h2>
    </div>
  )
}