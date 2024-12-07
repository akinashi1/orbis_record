"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./MainTitle.module.css";
import nextConfig from "@/next.config.mjs";
import { script } from "framer-motion/client";

const BASE_PATH = nextConfig.basePath || "";

export function MainTitle(props: any) {

    console.log("テスト");
    console.log(props.title);

  return (
    <h2 className={styles.heading05} data-en="Species">{props.title}</h2>
  )
}