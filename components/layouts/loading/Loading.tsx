"use client";

import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
import styles from "./Loading.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";

export function Loading() {
  return (
      <section className={styles.image}>
        <div className={styles.top_logo}>
          <OrbisLogo />
        </div>
        <strong className={styles.top_title}>NOW LOADING</strong>
      </section>
  )
}
