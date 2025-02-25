"use client";

import { createContext, useContext, useState, useEffect,Suspense  } from "react";
import {Loading} from "@/components/layouts/loading/Loading";

// Contextの作成
const DataContext =  createContext();

// Providerを作成してデータと更新関数をラップ
export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState();
  const [isLoading, setIsLoading] = useState(true); // ローディング状態
  const [fadeOut, setFadeOut] = useState(false); // ローディング状態

  //初回起動
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycby_SJEgaRyWa0U1cnYOY0h-w5KRg-DI3IAaDusWQqfYamSwT9ZvsWcOqDreDxuouN0v/exec')
    .then(response => response.json())
    .then(data => {
      setSharedData(data);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log("データの読み込みが完了しました");

      setTimeout(() => setFadeOut(true), 0); // 1秒間ローディング表示後にフェードアウト
    })

    // let data = {"category":[{"id":1,"type":"F","name":"亜人","en_name":"demi"},{"id":2,"type":"F","name":"亜人２","en_name":"test2"},{"id":3,"type":"S","name":"魔人","en_name":"demonia"},{"id":4,"type":"F","name":"人間","en_name":"human"},{"id":5,"type":"F","name":"猫","en_name":"cat"},{"id":6,"type":"","name":"","en_name":""},{"id":7,"type":"","name":"","en_name":""},{"id":8,"type":"","name":"","en_name":""},{"id":9,"type":"","name":"","en_name":""},{"id":10,"type":"","name":"","en_name":""}],"species":[{"id":1,"category_id":1,"name":"鬼(東洋鬼)","en_name":"data1"},{"id":2,"category_id":1,"name":"人狼","en_name":"data2"},{"id":3,"category_id":1,"name":"翼人","en_name":"data3"},{"id":4,"category_id":1,"name":"鉱人","en_name":"data4"},{"id":5,"category_id":1,"name":"喰種","en_name":"data5"},{"id":6,"category_id":1,"name":"猫人","en_name":"data6"},{"id":"","category_id":2,"name":"","en_name":""},{"id":"","category_id":2,"name":"","en_name":""},{"id":"","category_id":2,"name":"","en_name":""},{"id":"","category_id":2,"name":"","en_name":""},{"id":"","category_id":2,"name":"","en_name":""}],"top":[{"contents_type":"category"},{"contents_type":"sub_category"},{"contents_type":"キャラクター"}],"sub_category":[{"id":1,"category_id":1,"name":"亜人１","en_name":"test1"},{"id":2,"category_id":1,"name":"亜人２","en_name":"test2"},{"id":3,"category_id":2,"name":"魔人１","en_name":"test3"},{"id":4,"category_id":2,"name":"魔人２","en_name":"test4"},{"id":5,"category_id":3,"name":"人１","en_name":"test5"},{"id":6,"category_id":3,"name":"人２","en_name":"test6"}]};
    // setSharedData(data);

    // setTimeout(() => setFadeOut(true), 0); // 1秒間ローディング表示後にフェードアウト


  }, []);

  return (
    <>
      <Loading fadeOut = {fadeOut} />


      <DataContext.Provider value={{ sharedData, setSharedData }}>
        {children}
      </DataContext.Provider> 
    </>
  );
};

// Contextを使うためのカスタムフック
export const useDataContext = () => useContext(DataContext);