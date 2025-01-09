"use client";

import { createContext, useContext, useState, useEffect,Suspense  } from "react";
import {Loading} from "@/components/layouts/loading/Loading";

// Contextの作成
const DataContext =  createContext();

// Providerを作成してデータと更新関数をラップ
export const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ローディング状態
  const [fadeOut, setFadeOut] = useState(false); // ローディング状態

  //初回起動
  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycby_SJEgaRyWa0U1cnYOY0h-w5KRg-DI3IAaDusWQqfYamSwT9ZvsWcOqDreDxuouN0v/exec?sheetName=species')
    .then(response => response.json())
    .then(data => {
      setSharedData(data);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log("データの読み込みが完了しました");

      setTimeout(() => setFadeOut(true), 1000); // 1秒間ローディング表示後にフェードアウト
    })
  }, []);

  return (
    <>
      <Loading fadeOut = {fadeOut} />;


      <DataContext.Provider value={{ sharedData, setSharedData }}>
        {children}
      </DataContext.Provider> 
    </>
  );
};

// Contextを使うためのカスタムフック
export const useDataContext = () => useContext(DataContext);