import Image from "next/image";
import classes from "./Footer.module.css";
import nextConfig from "@/next.config.mjs";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.contents}>
        <p>Copyright © 2024 Akinashi-Kou All Rights Reserved.</p>
      </div>
    </footer>
  );
}
