import Image from "next/image";
import Link from "next/link";
import classes from "../styles/Header.module.css";
import nextConfig from "../next.config.mjs";


const BASE_PATH = nextConfig.basePath || "";

export function Header() {
  return (
      <header className={classes.main}>
      <Link href="/">
        <Image
        src={`${BASE_PATH}/orbis_icon.png`} alt="orbis_icon"
        width={100}
        height={100}
        />
        ORBIS RECORDdfasd
      </Link>

      <Link  href={"/character"}> Character </Link>
      <Link  href={"/species"}> Species </Link>
      <Link  href={"/world"}> World </Link>
      </header>

  );
}
