import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

import styles from "./species_list.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";
import {CharacterCard} from "@/components/elements/CharacterCard/CharacterCard";
import {MainTitle} from "@/components/elements/MainTitle/MainTitle";
import {SubTitle} from "@/components/elements/SubTitle/SubTitle";
import  species  from "@/public/JSON/species.json";
import { ReactElement } from "react";

export function SpeciesList() {

      // /** jsonデータ編集 */
      // const cdList = [];
      // for (var cdNo in Code) {
      //     for (var cd in Code[cdNo]) {
      //         const cdStr = <div>
      //                            {cdNo + '-' + cd + '-' + Code[cdNo][cd]}
      //                       </div>;
      //         cdList.push(cdStr);
      //     }
      // }

      let name = ['aaa','bbb','ccc'];
      let list : ReactElement[] = [];
      // let data : ReactElement;
      for(let i in name){
        let data = 
          <div className={styles.grid_item}>
            <CharacterCard
            title = {i}
            /> 
          </div>
        ;

        list.push(data);
      }

  return (
    <main  className={styles.main}>
      <section  className={styles.species_main}>

        <MainTitle 
          title = "種族一覧"
        />

        <SubTitle />

        <div className={styles.species_grid}>

        <>{name}</>

        </div>

      </section>
    </main>
  );
}



