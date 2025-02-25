"use client";

// スタイル
import styles from "./CardList.module.css";
// コンポーネント
import {OrbisLogo} from "@/components/OrbisLogo";
// import {CardList} from "@/components/elements/CardList/CardList";
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

export function CardList(props) {

  const { setSharedData, sharedData } = useDataContext();
  const [list, setList] = useState<ReactElement[]>([]);
  let list_data = props.list;

  useEffect(() => {
    //初回スキップ
    if(!list_data){
      return
    }

    const categories = list_data.category ;
    const species = list_data.species ;

    let newList : ReactElement[] = []; 
    let species_id = "";

    for (let j in categories){
      let index = categories[j]["id"];
      let main_title = categories[j]["name"];
      let main_en_title = categories[j]["en_name"];
      let type = categories[j]["type"];
      let spesies_data : ReactElement[] = [];
      //メインタイトル
      newList.push(
        <SecondaryTitle key={index}
          title = {main_title}
          en_title = {main_en_title}
        />
      );

      //表示用フレーム
      newList.push(
        <div className={styles.species_grid}>
        {spesies_data}
        </div>
      )

      for (let k in species) {
        if (index == species[k]["category_id"]){

          const baseProps = {
            name : species[k]["name"],
            en_name : species[k]["en_name"]
          }

          spesies_data.push( 
            <div key={species_id} className={styles.grid_item}>
              <Card
                {...baseProps}
              />
            </div>
          )
        }
      }
    }
    
    setList((prevList) => [...prevList, ...newList]);




    
  }, [sharedData]);

  return (
    <main  className={styles.main}>
      <>{list}</>
    </main>
  );
}
