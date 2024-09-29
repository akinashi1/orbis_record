import Image from "next/image";
// import styles from "@/styles/Main.module.css";
import nextConfig from "@/next.config.mjs";

import {Header} from "@/components/layouts/header/Header";
import {Footer} from "@/components/layouts/footer/Footer";
import {Main} from "@/components/elements/main/Main";

const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}
