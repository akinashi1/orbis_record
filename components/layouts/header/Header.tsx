import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export function Header() {
  return (
      <header className={classes.header}>

        <div  className={classes.headLeft}>
          <Link href="/" className={classes.logo}>
            <Image
            src={`${BASE_PATH}/orbis_icon.png`} alt="orbis_icon"
            width={90}
            height={90}
            />
            <strong className={classes.logo_text}>ORBIS <br/>RECORD</strong>
          </Link>
        </div>

        <div className={classes.head_center}>
          {/* <Link  href={"/character"}><p className={classes.menu_text}>Character</p></Link>
          <Link  href={"/species"}><p className={classes.menu_text}>Species</p></Link>
          <Link  href={"/world"}><p className={classes.menu_text}>World</p></Link>
          <Link  href={"/items"}><p className={classes.menu_text}>Item</p></Link>
          <Link  href={"/term"}><p className={classes.menu_text}>Term</p></Link> */}
        </div>

        <div className={classes.head_right}>
          絶賛工事中
        </div>

      </header>
  );
}
