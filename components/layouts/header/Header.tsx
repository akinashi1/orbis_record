"use client";

import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";
import nextConfig from "@/next.config.mjs";
import React, { useState } from "react";

const BASE_PATH = nextConfig.basePath || "";

export function Header() {

  const [isActive, setIsActive] = useState(false);

  function click_burger(){
    setIsActive((prev) => !prev);
  }

  return (
      <header className={classes.header}>
        <div className={classes.main}>

          <Link href="/" className={classes.logo}>
            <Image
              src={`${BASE_PATH}/orbis_icon.png`} alt="orbis_icon"
              width={90}
              height={90}
            />
            <strong>ORBIS <br/>RECORD</strong>
          </Link>

          <section>
            <nav className={`${classes.right_nav} ${isActive ? classes.active : ""}`}>
              <p className={classes.menu}><Link href={"/character"}>Character</Link></p>
              <p className={classes.menu}><Link href={"/species"}>Species</Link></p>
              <p className={classes.menu}><Link href={"/world"}>World</Link></p>
              <p className={classes.menu}><Link href={"/items"}>Items</Link></p>
              <p className={classes.menu}><Link href={"/term"}>Term</Link></p>
            </nav>

            <section onClick={ () => click_burger() }>
              <div className={`${classes.btn_trigger} ${isActive ? classes.active : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </section>

          </section>
        </div>
      </header>
  );
}
