import Image from "next/image";
import styles from "@/styles/Main.module.css";
import nextConfig from "@/next.config.mjs";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Main} from "@/components/Main";


const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div className={styles.page}>

    <Header />

    <Main />

    <Footer />
    </div>
  );
}
