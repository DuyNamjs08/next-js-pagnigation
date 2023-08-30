"use client";
import Pagnigation from "@/components/Pagnigation";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
interface DataType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const Home = () => {
  const total = 150;
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState<DataType[]>([]);
  const [panigationPergage, setPanigationPergage] = useState(15);
  const decreaseCurrent = useCallback(() => {
    setCurrent((prev) => prev - 1);
  }, []);
  const increaseCurrent = useCallback(() => {
    setCurrent((prev) => prev + 1);
  }, []);
  const calculatedTotal = useMemo(() => {
    return Math.ceil((total ? total : 0) / panigationPergage);
  }, [total, panigationPergage]);
  const handleCallData = async () => {
    const resultData = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${current}&_limit=10`
    );
    setData(resultData.data);
    console.log("resultData", resultData.data);
  };
  useEffect(() => {
    handleCallData();
  }, [current]);
  console.log("1");
  console.log("1");
  console.log("1");
  return (
    <div>
      {data?.map((item) => (
        <div key={item.id}>{item?.title}</div>
      ))}
      <Pagnigation
        total={calculatedTotal}
        current={current}
        setCurrent={setCurrent}
        setPanigationPergage={setPanigationPergage}
        panigationPergage={panigationPergage}
        decreaseCurrent={decreaseCurrent}
        increaseCurrent={increaseCurrent}
      />
    </div>
  );
};

export default Home;
