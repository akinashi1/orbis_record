import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

import styles from "./species_list.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";

export function SpeciesList() {
  return (
    <main  className={styles.main}>
      <section  className={styles.species_main}>
        {/* <h1 className={styles.species_title}>種族一覧</h1> */}

        <h2 className={styles.heading05} data-en="Species">種族</h2>

        <div className={styles.mini_title}>
          <div>
            <h2>亜人<span>demi</span></h2> 
          </div>
        </div>

        <div className={styles.species_grid}>

          <div className={styles.grid_item}>
            <Image
              className={styles.image}
              src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />

            <Image
              className={styles.image}
              src={`${BASE_PATH}/no_image_hover.png`} alt="orbis_icon"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />

            <h2>鬼(西洋鬼)</h2>
            <p>Ogre</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>人狼</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>翼人</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>鉱人</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>喰人</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>吸血鬼</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>吸魔鬼</h2>
            <p>英語名</p>
          </div>

        </div>

        <div className={styles.mini_title}>
          <div>
            <h2>妖魔族<span>demonia</span></h2> 
          </div>
        </div>

        <div className={styles.species_grid}>

          <div className={styles.grid_item}>
            <Image
              className={styles.image}
              src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />

            <Image
              className={styles.image}
              src={`${BASE_PATH}/no_image_hover.png`} alt="orbis_icon"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />

            <h2>魔族</h2>
            <p>Ogre</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>人狼</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>翼人</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>鉱人</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>喰人</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>吸血鬼</h2>
            <p>英語名</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            className={styles.image}
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>吸魔鬼</h2>
            <p>英語名</p>
          </div>

        </div>
      </section>
    </main>
  );
}



