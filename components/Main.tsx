import Image from "next/image";
import Link from "next/link";
import classes from "@/styles/Header.module.css";
import nextConfig from "@/next.config.mjs";
import styles from "@/styles/Main.module.css";

import { StrictMode } from "react";
import { motion } from "framer-motion"
import App from "@/components/motion/LogoMotion";
import {OrbisLogo} from "@/components/OrbisLogo";

const BASE_PATH = nextConfig.basePath || "";

export function Main() {
  return (
    <main className={styles.main}>

    <OrbisLogo />
    <div>
      <strong className={styles.title}>ORBIS RECORD</strong>
    </div>
    <div className="{styles.twitter}">
      <a
      href="https://x.com/you_akinashi"
      target="_blank"
      rel="noopener noreferrer"
      >
        絶賛工事中!!  ご連絡等twitterまで
      </a>
    </div>

      {/* <div className={styles.ctas}>
        <a
          className={styles.primary}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondary}
        >
          Read our docs
        </a>
      </div> */}
    </main>


);

}
