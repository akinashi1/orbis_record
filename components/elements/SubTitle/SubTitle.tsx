"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./SubTitle.module.css";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export function SubTitle(props) {
  return (
    <div className={styles.mini_title}>
    <div>
      <h2>{props.title}<span>{props.en_title}</span></h2> 
    </div>
  </div>
  )
}