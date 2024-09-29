import Image from "next/image";
import styles from "@/styles/Main.module.css";
import nextConfig from "@/next.config.mjs";
import {Header} from "@/components/layouts/header/Header";
import {Footer} from "@/components/Footer";
import {Main} from "@/components/elements/main/Main";
import {OrbisLogo} from "@/components/OrbisLogo";
import { motion } from "framer-motion"
import App from "@/components/motion/LogoMotion";


const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div>キャラクター</div>
      <App />

      <Main />

      <Footer />
    </div>
  );
}