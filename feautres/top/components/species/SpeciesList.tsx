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

export function SpeciesList() {

  const [list, setList] = useState<ReactElement[]>([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycby_SJEgaRyWa0U1cnYOY0h-w5KRg-DI3IAaDusWQqfYamSwT9ZvsWcOqDreDxuouN0v/exec?sheetName=species')
      .then(response => response.json())
      .then(data => {
        // useList(data)

        const newList = data.map((item, index) => (
          <SecondaryTitle
            key={index}
            title={item["name"]}
            en_title={item["en_name"]}
          />
        ));
        setList((prevList) => [...prevList, ...newList]);

      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // const species_list = JSON.parse(JSON.stringify(species));
  // const categories_list = JSON.parse(JSON.stringify(categories));
  // let list : ReactElement[] = []; 
  // let main_title ="";
  // let main_en_title ="";
  // let sub_title = "";
  // let species_id = "";
  // let spesies_data : ReactElement[] = [];

  // for (let i in categories_list){
  //   //カテゴリー
  //   main_title = categories_list[i]["name"];
  //   main_en_title = categories_list[i]["en_name"];
    
  //   list.push(
  //     <SecondaryTitle key={main_title}
  //       title = {main_title}
  //       en_title = {main_en_title}
  //     />
  //   );

  //   for (let j in categories_list[i]["sub_category"]){
  //     //サブカテゴリー
  //     sub_title = categories_list[i]["sub_category"][j]["name"]

  //     spesies_data =[];
  //     list.push(
  //       <section key={sub_title}>
  //         <TertiaryTitle
  //           title = {sub_title}
  //         />

  //         <div className={styles.species_grid}>
  //         <>{spesies_data}</>
  //         </div>
  //       </section>
  //     )

  //     for (let k in categories_list[i]["sub_category"][j]["species"]){
  //       species_id = categories_list[i]["sub_category"][j]["species"][k]

  //       const baseProps = {
  //         name : species_list[species_id]["name"],
  //         en_name : species_list[species_id]["en_name"]
  //       }

  //       spesies_data.push( 
  //         <div key={species_id} className={styles.grid_item}>
  //           <CharacterCard
  //             {...baseProps}
  //           /> 
  //         </div>
  //       )
  //     }
  //   }
  // }

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
