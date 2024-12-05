import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import styles from "./Main.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";
import {SpeciesList} from "@/feautres/top/components/species/SpeciesList"

const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
  <main className={styles.main}>
    <section className={styles.contain}>
      <section>
        <div className={styles.top_logo}>
          <OrbisLogo />
        </div>
        <strong className={styles.top_title}>ORBIS RECORD</strong>
      </section>

      {/* <section className={styles.world_info}>
        <h1 className={styles.info_title}>
          <span>概要</span>
        </h1>

        <p>
          世界について1<br />
          世界について2<br />
          世界について3<br />
        </p>
      </section> */}

      {/* <section>
        <h1  className={styles.world_title}>世界一覧</h1>
        <div className={styles.world_contents}>世界一覧</div>
      </section> */}

      <SpeciesList />
    </section>
  </main>
  );
}
