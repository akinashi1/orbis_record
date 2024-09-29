// import Image from "next/image";
// import Link from "next/link";
// import classes from "@/styles/Header.module.css";
import nextConfig from "@/next.config.mjs";
import styles from "./Main.module.css";

// import { StrictMode } from "react";
// import { motion } from "framer-motion"
// import App from "@/components/motion/LogoMotion";
import {OrbisLogo} from "@/components/OrbisLogo";

const BASE_PATH = nextConfig.basePath || "";

export function Main() {
  return (
    <main className={styles.main}>

    <OrbisLogo />
    <div>
      <strong className={styles.title}>ORBIS RECORD</strong>
    </div>

{/*     
    <div className="{styles.twitter}">
        大きな世界の小さな記憶
    </div>

    <div>
      <h1>Introduction</h1>
      <p>
        オルビスレコードとは、
      </p>
    </div>

    <div>

      <h1>Speaces</h1>
      <table>

        
      </table>
    </div> */}


    </main>


);

}
