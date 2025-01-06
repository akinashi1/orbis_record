"use client";

import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import {OrbisLogo} from "@/components/OrbisLogo";
import App from "@/components/motion/LogoMotion";

const BASE_PATH = nextConfig.basePath || "";
import { useDataContext } from "@/app/context/DataContext";

export default function Character() {

  const { sharedData } = useDataContext();
  console.log(sharedData);

  return (
    <div>
      <div>キャラクター</div>
      <App />
    </div>
  );
}






