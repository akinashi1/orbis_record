"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CharacterCard.module.css";
import nextConfig from "@/next.config.mjs";
// import React, { useState } from "react";
// import { main } from "framer-motion/client";

const BASE_PATH = nextConfig.basePath || "";

export function CharacterCard(props) {
  function popup_modal(){
    console.log("hey")
  }
  
  return (
    <main className={styles.grid_item_main}>
      <section onClick={ () => popup_modal() } className={styles.grid_item}> 
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

        <h2>{props.name}</h2>
        <p>{props.en_name}</p>
      </section>

    </main>
    )
}