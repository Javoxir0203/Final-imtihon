"use client";

import Image from "next/image";
import { useState } from "react";
import { AlignEndHorizontal, Heart, Minus, Plus, X } from "lucide-react";

import foto from "@/public/icons/foto.svg";
import { Button } from "@/components/ui/button";

const Corsica = () => {
  const data = [
    { id: 1, title: "Анализатор мочи MIND UA-66", price: 150000, image: foto, description: "Артикул: 213134", sub_description: "B наличии" },
    { id: 2, title: "Анализатор мочи MIND UA-66", price: 200000, image: foto, description: "Артикул: 213134", sub_description: "B наличии"},
    { id: 3, title: "Анализатор мочи MIND UA-66", price: 300000, image: foto, description: "Артикул: 213134", sub_description: "B наличии"},
  ];

  const allPriceData = data.reduce((acc, item) => acc + item.price, 0);

  const [allPrice, setAllPrice] = useState(allPriceData);

  // counter
  const [counter, setCounter] = useState(1)

  const onAdd = (id: number) => {
    const findItem = data.find((item) => item.id === id);
    if (findItem) setAllPrice(allPrice + findItem.price);
    setCounter((prev) => prev + 1)
  };

  const onRemove = (id: number) => {
    const findItem = data.find((item) => item.id === id);
    if (findItem) setAllPrice(allPrice - findItem.price);
    setCounter((prev) => prev - 1)

  };

  return (
    <div className="container mx-auto my-12 grid grid-cols-4 gap-4">
      <div className="col-span-3 flex flex-col gap-4">
        {data.map((item, index) => (
          <div className={"flex justify-between gap-4 rounded-md border"} key={index}>
            <div className="relative flex h-48 w-2/6 bg-white p-12">
              <Button className="absolute left-2 top-2 z-50 rounded-full border bg-green-100 text-green-400">Новинка</Button>
              <Image className={"h-full w-full"} src={item.image} fill alt={"image"} />
            </div>

            <div className="flex flex-1 justify-between gap-4 p-4">
              <div>
                <h2 className=" text-xl font-semibold">{item.title}</h2>
                <p className="text-xl font-normal">{item.description}</p>
                <p className="text-xl  font-normal">{item.sub_description}</p>
              </div>

              <div className={""}>
                <p className="text-md mb-3 font-normal">{item.price} руб</p>
                <div className="flex rounded-full border">
                  <Button onClick={() => onRemove(item.id)} size={"icon"} className=" rounded-full border border-none bg-transparent text-green-600 hover:bg-[#eee]">
                    <Minus className={"w-4"} />
                  </Button>
                  <p className="p-2">{counter}</p>
                  <Button onClick={() => onAdd(item.id)} size={"icon"} className="rounded-full border border-none bg-transparent text-green-600 hover:bg-[#eee]">
                    <Plus className={"w-4"} />
                  </Button>
                </div>
              </div>

              <div className="flex gap-5">
                <AlignEndHorizontal />
                <Heart />
                <X />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-span-1 rounded border bg-white p-3">
        <div className="flex items-center justify-between ">
          <p className="mb-2 text-xl">Итого</p>
          <p className="mb-2 text-xl">{allPrice} руб.</p>
        </div>
        <hr className=" mb-4" />
        <div className="flex items-center justify-between">
          <p className=" text-xl ">Товары ({data.length} шт)</p>
          <p className=" text-xl ">{allPrice} руб.</p>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-xl ">Скидка</p>
          <p className=" mb-8">0 руб.</p>
        </div>
        <div className="flex  flex-col gap-2">
          <Button className=" w-full  rounded-full border bg-[#088269] hover:bg-green-900">Оформить заказ</Button>
          <Button className=" w-full  rounded-full border bg-white text-[#088269]  hover:bg-gray-100 ">Задать вопрос</Button>
        </div>
      </div>
    </div>
  );
};

export default Corsica;
