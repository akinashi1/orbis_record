"use client";

import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
import styles from "./Loading.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";

export function Loading(prop) {
  return (
    <section className={`${styles.image} ${prop.fadeOut ? styles.active : ""}`}>
      <div  className={styles.continer}>
        <div className={styles.logo}>
          <OrbisLogo />
        </div>
        <div className={styles.circle} >
          <svg viewBox="0 0 100 100">
            <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
            <text>
              <textPath xlinkHref="#circle">
              NOW LOADING.......NOW LOADING.......NOW LOADING.......
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
