"use client";
import Image from "next/image";

import symbol1 from "@/public/icons/symbol1.png";
import symbol2 from "@/public/icons/symbol2.png";
import symbol3 from "@/public/icons/symbol3.png";
import symbol4 from "@/public/icons/symbol4.png";

const Cards = () => {
  return (
    <div className="bg-[#F8F7F3] mb-10 py-10">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-medium mb-10">Почему выбирают нас?</h2>
        <div className="grid grid-cols-4 gap-5 justify-between">
          <div className="border rounded bg-[#F8F7F3] p-4 flex flex-col items-center ">
            <Image src={symbol2} alt="" width={80} height={100} className="mb-4" />
            <h4 className="text-xl text-center">Быстрая доставка</h4>
          </div>
          <div className="border rounded bg-[#F8F7F3] p-4 flex flex-col items-center ">
            <Image src={symbol3} alt="" width={80} height={100} className="mb-16" />
            <h4 className="text-xl text-center">Весь товар сертифицирован</h4>
          </div>
          <div className="border rounded bg-[#F8F7F3] p-4 flex flex-col items-center ">
            <Image src={symbol1} alt="" width={80} height={100} className="mb-28" />
            <h4 className="text-xl text-center">Гибкая система скидок</h4>
          </div>
          <div className="border rounded bg-[#F8F7F3] p-4 flex flex-col items-center ">
            <Image src={symbol4} alt="" width={80} height={100} className="mb-12" />
            <h4 className="text-xl text-center">Лет на рынке</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
