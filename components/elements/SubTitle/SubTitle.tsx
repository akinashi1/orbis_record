"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./SubTitle.module.css";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export function SubTitle() {
  return (
    <div className={styles.mini_title}>
    <div>
      <h2>亜人<span>demi</span></h2> 
    </div>
  </div>
  )
}