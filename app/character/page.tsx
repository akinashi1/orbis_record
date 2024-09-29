import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import {OrbisLogo} from "@/components/OrbisLogo";
import App from "@/components/motion/LogoMotion";

const BASE_PATH = nextConfig.basePath || "";

export default function Character() {
  return (
    <div>
      <div>キャラクター</div>
      <App />
    </div>
  );
}
