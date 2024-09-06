import Image from "next/image";
import styles from "../styles/page.module.css";
import nextConfig from "../next.config.mjs";
import {Footer} from "../components/footer";


const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  return (
    <div className={styles.page}>



      <main className={styles.main}>

		<div>
			<img className={styles.icon}  src={`${BASE_PATH}/orbis_icon.png`} alt="orbis_icon"></img>
		</div> 
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
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
