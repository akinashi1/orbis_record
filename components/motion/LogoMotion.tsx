'use client'
import Image from "next/image";
import nextConfig from "@/next.config.mjs";
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import React from "react"
const BASE_PATH = nextConfig.basePath || "";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100lvh",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={`${BASE_PATH}/orbis_icon.png`} alt="orbis_icon"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </>
  );
}




