import Image from "next/image";
import Link from "next/link";
import classes from "@/styles/Header.module.css";
import nextConfig from "@/next.config.mjs";
import styles from "@/styles/Main.module.css";

const BASE_PATH = nextConfig.basePath || "";

export function OrbisLogo() {
  return (
    <div>
      <div>
        <Image
          src={`${BASE_PATH}/orbis_icon.png`} alt="orbis_icon"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
