"use client";

import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
import styles from "./species_list.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";
import {CharacterCard} from "@/components/elements/CharacterCard/CharacterCard";
import {PrimaryTitle,SecondaryTitle,TertiaryTitle} from "@/components/elements/Title/Title";
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
      <SecondaryTitle 
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
          <TertiaryTitle
            title = {sub_title}
          />

          <div className={styles.species_grid}>
          <>{spesies_data}</>
          </div>
        </section>
      )

      for (let k in categories_list[i]["sub_category"][j]["species"]){
        
        species_id = categories_list[i]["sub_category"][j]["species"][k]

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
