"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";
import nextConfig from "@/next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";
import React, { useState, useEffect ,useRef} from 'react';

  import { useDataContext } from "@/app/context/DataContext";
import { section } from "framer-motion/client";

export function Card(props) {

  const pops = useRef<HTMLDivElement>(null!);
  const back = useRef<HTMLDivElement>(null!);

  function popup_modal(){
    console.log("hey")
  }

  const { setSharedData, sharedData } = useDataContext();

  useEffect(() => {
    //初回スキップ
    if(!sharedData){
      return
    }

    let poped_height = 500;
    let poped_width = 300;
    let popup = pops.current;
    let popup_overlay = back.current
    // クリックからのポップアップ表示
    popup.addEventListener('click', () => {

      const rect = popup.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const pop_originX = rect.left + 300 / 2;

      const originY = rect.top + rect.height / 2;
        popup.classList.add('is-popup');

      // transform-originをクリック位置に設定
      popup.style.transformOrigin = `${originX}px ${originY}px`;

      // ポップアップアニメーションを開始
      requestAnimationFrame(() => {
        
        popup_overlay.classList.add(styles.active);
        
        popup.style.transition = 
          'transform 0.3s ease, width 0.3s ease, height 0.3s ease';

        // 画面中央に移動し、横幅800pxに設定
        popup.style.height = `${poped_height}px`;
        popup.style.width = `${poped_width}px`;

        popup.style.transform = 
        `translate(
          ${document.documentElement.clientWidth / 2 - pop_originX}px, 
          ${(window.innerHeight - popup.offsetHeight) / 2 - originY}px
        )`;

        document.addEventListener('touchmove', noscroll, {passive: false});
        document.addEventListener('wheel', noscroll, {passive: false});

        popup.classList.add(styles.is_popup);
      });
    }); 

    //ポップアップを閉じる
    popup_overlay.addEventListener('click', () => {

      console.log("閉じる")

      document.removeEventListener('touchmove', noscroll);
      document.removeEventListener('wheel', noscroll);
      // const card = document.querySelector('.card.is-popup');
      // if (card) {
      //   overlay.classList.remove('active');
      //   card.style.transition = 'transform 0.3s ease, width 0.3s ease, height 0.3s ease';
      //   card.style.transform = 'translate(0, 0) scale(1)';
      //   card.style.width = '200px'; // 元のサイズに戻す
      //   card.style.height = '300px'; // 元のサイズに戻す
      //   card.classList.remove('is-popup');

      //   // アニメーションが終了した後に状態をリセット
      //   setTimeout(() => {
      //     card.style.transformOrigin = 'center';
      //     card.style.transition = '';
      //     card.style.transform = '';
      //   }, 300);
      // }

    });

    function noscroll(e){
      e.preventDefault();
    }

    }, [sharedData]);

  return (
    <main>
      <section  id="target" onClick={ () => popup_modal() }  className={styles.grid_item} ref={pops}> 
        <Image
          className={styles.image}
          src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />

        <h2>{props.name}</h2>
        <p>{props.en_name}</p>
      </section>
      
      <div className={styles.popup_overlay} ref={back}></div>
    </main>
    )
}