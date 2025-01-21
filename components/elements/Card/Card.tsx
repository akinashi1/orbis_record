"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";
import React, { useState, useEffect } from 'react';

  import { useDataContext } from "@/app/context/DataContext";

export function Card(props) {
  function popup_modal(){
    console.log("hey")
  }

  const { setSharedData, sharedData } = useDataContext();

  useEffect(() => {
      //初回スキップ
      if(!sharedData){
        return
      }

    let target = document.getElementById("target")!;
    // let target = document.getElementById("target")!;

    const rect = target.getBoundingClientRect();


    }, [sharedData]);

  return (
    <main id="target" className={styles.grid_item_main}>
      <section  onClick={ () => popup_modal() }  className={styles.grid_item}> 
        <Image
      
          className={styles.image}
          src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />

        {/* <Image
          className={styles.image}
          src={`${BASE_PATH}/no_image_hover.png`} alt="orbis_icon"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        /> */}

        <h2>{props.name}</h2>
        <p>{props.en_name}</p>
      </section>
    </main>
    )
}