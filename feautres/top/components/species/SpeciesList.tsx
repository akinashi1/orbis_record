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
import { section, tr } from "framer-motion/client";
import React, { useState, useEffect } from 'react';


//コンテキスト
import { useDataContext } from "@/app/context/DataContext";

export function SpeciesList() {

  const { setSharedData, sharedData } = useDataContext();
  const [list, setList] = useState<ReactElement[]>([]);

  useEffect(() => {
    //初回スキップ
    if(!sharedData){
      return
    }

    const categories = sharedData.category ;
    const species = sharedData.species ;

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
        <>{spesies_data}</>
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
              <CharacterCard
                {...baseProps}
              />
            </div>
          )
        }
      }
    }

    // for (let i in species_list){
    //   switch(species_list[i]['contents_type']){
    //     case 'category':

    //       main_title = species_list[i]["name"];
    //       main_en_title = species_list[i]["en_name"];

    //       newList.push(
    //         <SecondaryTitle key={main_title}
    //           title = {main_title}
    //           en_title = {main_en_title}
    //         />
    //       );

    //       break;
    //     case 'sub_category':
    //       //サブカテゴリー
    //       sub_title = species_list[i]["name"];
    //       spesies_data =[];
    //       newList.push(
    //         <section key={sub_title}>
    //           <TertiaryTitle
    //             title = {sub_title}
    //           />
    //           <div className={styles.species_grid}>
    //           <>{spesies_data}</>
    //           </div>
    //         </section>
    //       )
    //       break;

    //     case 'character':
    //       const baseProps = {
    //         name : species_list[i]["name"],
    //         en_name : species_list[i]["en_name"]
    //       }

    //       newList.push( 
    //         <div key={species_id} className={styles.grid_item}>
    //           <CharacterCard
    //             {...baseProps}
    //           /> 
    //         </div>
    //       )
    //       break;

    //     default:
    //   }
    // }
    
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
