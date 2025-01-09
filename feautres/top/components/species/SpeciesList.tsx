"use client";

// スタイル
import styles from "./species_list.module.css";
// コンポーネント
import {OrbisLogo} from "@/components/OrbisLogo";
import {CharacterCard} from "@/components/elements/CharacterCard/CharacterCard";
import {PrimaryTitle,SecondaryTitle,TertiaryTitle} from "@/components/elements/Title/Title";
// JSON
import  species  from "@/public/JSON/species.json";
import  categories  from "@/public/JSON/category.json";
import { ReactElement } from "react";
import { section } from "framer-motion/client";
import React, { useState, useEffect } from 'react';


//コンテキスト
import { useDataContext } from "@/app/context/DataContext";

export function SpeciesList() {

  const { setSharedData, sharedData } = useDataContext();
  const [list, setList] = useState<ReactElement[]>([]);

  useEffect(() => {
    const newList = sharedData.map((item, index) => (
      <SecondaryTitle
        key={index}
        title={item["name"]}
        en_title={item["en_name"]}
      />
    ));

    setList((prevList) => [...prevList, ...newList]);

  }, [sharedData]);

  return (
    <main  className={styles.main}>
      <section  className={styles.species_main}>

        <PrimaryTitle 
          title = "種族一覧"
        />

        <>{list}</>

      </section>
    </main>
  );
}
