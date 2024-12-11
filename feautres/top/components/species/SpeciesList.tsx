"use client";

import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

import styles from "./species_list.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";
import {CharacterCard} from "@/components/elements/CharacterCard/CharacterCard";
import {MainTitle} from "@/components/elements/MainTitle/MainTitle";
import {SubTitle} from "@/components/elements/SubTitle/SubTitle";
import  species  from "@/public/JSON/species.json";
import  categories  from "@/public/JSON/category.json";

import { ReactElement } from "react";
import { section } from "framer-motion/client";

export function SpeciesList() {

  const species_list = JSON.parse(JSON.stringify(species));
  const categories_list = JSON.parse(JSON.stringify(categories));

  let list : ReactElement[] = []; 

  let main_title ="";
  let main_en_title ="";
  let sub_title = "";
  let species_id = "";
  let spesies_data : ReactElement[] = [];

  for (let i in categories_list){
    //カテゴリー
    main_title = categories_list[i]["name"];
    main_en_title = categories_list[i]["en_name"];
    
    list.push(
      <SubTitle 
        title = {main_title}
        en_title = {main_en_title}
      />
    );

    for (let j in categories_list[i]["sub_category"]){
      //サブカテゴリー
      sub_title = categories_list[i]["sub_category"][j]["name"]

      
      spesies_data =[];
      list.push(
        <section>
          <h2>{sub_title}</h2>

          <div className={styles.species_grid}>
          <>{spesies_data}</>
          </div>
        </section>
      )

      console.log(categories_list[i]["sub_category"][j]["species"])
      for (let k in categories_list[i]["sub_category"][j]["species"]){
        
        species_id = categories_list[i]["sub_category"][j]["species"][k]
        console.log("test")


        const baseProps = {
          name : species_list[species_id]["name"],
          en_name : species_list[species_id]["en_name"]
        }

        spesies_data.push( 
          <div className={styles.grid_item}>
            <CharacterCard
              { ...baseProps}
            /> 
          </div>
        )
      }
    }
  }

  // for (let i in species_list){
  //   console.log(i)
  //   list.push(
  //     <SubTitle 
  //       title = {i}
  //     />
  //   );
  //   for (let j in species_list[i]){
  //     list.push(
  //       <h2>{j}</h2>
  //     );

  //     list.push(   
  //         <div className={styles.species_grid}>
  //         <>{spesies_list}</>
  //         </div>
  //     )

  //     for (let k in species_list[i][j]){
  //       const baseProps = {
  //         name : species_list[i][j][k]["name"],
  //         en_name : species_list[i][j][k]["en_name"]
  //       }

  //       spesies_list.push( 
  //         <div className={styles.grid_item}>
  //           <CharacterCard
  //             { ...baseProps}
  //           /> 
  //         </div>
  //       )
  //     }
  //     spesies_list = [];
  //   }
  // }


  return (
    <main  className={styles.main}>
      <section  className={styles.species_main}>

        <MainTitle 
          title = "種族一覧"
        />

        <>{list}</>

      </section>
    </main>
  );
}
