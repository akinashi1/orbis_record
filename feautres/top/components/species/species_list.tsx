import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

import styles from "./species_list.module.css";
import {OrbisLogo} from "@/components/OrbisLogo";

export default function species_list() {
  return (
    <main  className={styles.main}>

      <section  className={styles.species_main}>


        <h1 className={styles.species_title}>種族一覧</h1>

        <h2 className={styles.mini_title}>
          <span className={styles.mini_title_text}>亜人</span>
        </h2>

        <div className={styles.species_grid}>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>

          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>
        </div>

        <h2 className={styles.mini_title}>
          <span className={styles.mini_title_text}>亜人</span>
        </h2>

        <div className={styles.species_grid}>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>

          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>
        
        </div>        <h2 className={styles.mini_title}>
          <span className={styles.mini_title_text}>亜人</span>
        </h2>

        <div className={styles.species_grid}>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>

          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>
        
        </div>        <h2 className={styles.mini_title}>
          <span className={styles.mini_title_text}>亜人</span>
        </h2>

        <div className={styles.species_grid}>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>

          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>
        
        </div>        <h2 className={styles.mini_title}>
          <span className={styles.mini_title_text}>亜人</span>
        </h2>

        <div className={styles.species_grid}>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>

          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>
          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
            <h2>種族名</h2>
            <p>説明テキスト</p>
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>

          <div className={styles.grid_item}>
            <Image
            src={`${BASE_PATH}/no_image.png`} alt="orbis_icon"
            width={800} 
            height={600} 
            style={{ width: '100%', height: 'auto' }} 
            />
          </div>
        
        </div>
      </section>
    </main>
  );
}



