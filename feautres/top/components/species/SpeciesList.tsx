"use client";

// スタイル
import styles from "./species_list.module.css";
// コンポーネント
import {OrbisLogo} from "@/components/OrbisLogo";
import {CardList} from "@/components/elements/CardList/CardList";
import {Card} from "@/components/elements/Card/Card";
import {PrimaryTitle,SecondaryTitle,TertiaryTitle} from "@/components/elements/Title/Title";
// JSON
import  species  from "@/public/JSON/species.json";
import  categories  from "@/public/JSON/category.json";
import { ReactElement } from "react";
import { section, tr } from "framer-motion/client";
import React, { useState, useEffect } from 'react';


//コンテキスト
import { useDataContext } from "@/app/context/DataContext";

export function SpeciesList() {

  const { setSharedData, sharedData } = useDataContext();

//TODO ここからデータをデータリストに渡せるようにしたい

  return (
    <main  className={styles.main}>
      <section  className={styles.species_main}>
        <PrimaryTitle 
          title = "サブタイトル"
        />
        <CardList 
          list = {sharedData}
        />
      </section>
    </main>
  );
}
