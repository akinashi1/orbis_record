"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Title.module.css";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export function PrimaryTitle(props: any) {
  return (
    <h2 className={styles.heading05} data-en="Species">
      {props.title}
    </h2>
  )
}

export function SecondaryTitle(props) {
  return (
    <div className={styles.mini_title}>
    <div>
      <h2>{props.title}<span>{props.en_title}</span></h2> 
    </div>
  </div>
  )
}

export function TertiaryTitle(props) {
  return (
    <h2>{props.title}</h2>
  )
}