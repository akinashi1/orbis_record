import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import styles from "./Main.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";
const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <main>
        <div className={styles.flex}>
          <OrbisLogo />
        </div>

        <div className={styles.flex}>
          <div>
            <strong className={styles.title}>ORBIS RECORD</strong>
          </div>
        </div>
    </main>
  );
}
