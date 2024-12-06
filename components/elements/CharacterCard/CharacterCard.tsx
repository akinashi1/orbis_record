"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CharacterCard.module.css";
import nextConfig from "@/next.config.mjs";
// import React, { useState } from "react";
// import { main } from "framer-motion/client";

const BASE_PATH = nextConfig.basePath || "";

export function CharacterCard() {
  return (
    <main className={styles.grid_item}>

      <Image
        className={styles.image}
        src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
        width={800}
        height={600}
        style={{ width: '100%', height: 'auto' }}
      />

      <Image
        className={styles.image}
        src={`${BASE_PATH}/no_image_hover.png`} alt="orbis_icon"
        width={800}
        height={600}
        style={{ width: '100%', height: 'auto' }}
      />

      <h2>鬼(西洋鬼)</h2>
      <p>Ogre</p>

    </main>
  )
}