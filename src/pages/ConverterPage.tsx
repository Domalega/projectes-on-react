import React, { useEffect, useState } from "react";

interface ICurrencies {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: {
    [currencyCode: string]: number;
  };
}

interface ConverterPageProps {}

const ConverterPage: React.FC<ConverterPageProps> = () => {
  const apiKey: string = "815d30c0118b4c2eb0f1d92dfcc81017";
  const url: string = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
  const [currencies, setCurrencies] = useState<ICurrencies | any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setCurrencies(data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-emerald-600">
      {currencies ? (
        <div className="container mx-auto bg-gray-500 md:w-auto h-2/4"></div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-800" />
          <p className="pt-4 font-thin text-xl">Data Loading</p>
        </div>
      )}
    </div>
  );
};

export default ConverterPage;
