import Image from "next/image";
import styles from "@/styles/page.module.css";
import nextConfig from "@/next.config.mjs";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";


const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div className={styles.page}>

    <Header />
      <main className={styles.main}>
      <Image
          src={`${BASE_PATH}/orbis_icon.png`} alt="orbis_icon"
        width={400}
              height={400}
      />

      <div>
        <strong className={styles.title}>ORBIS RECORD</strong>
      </div>

        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
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
        </div>
      </main>
    <Footer />
    </div>
  );
}
