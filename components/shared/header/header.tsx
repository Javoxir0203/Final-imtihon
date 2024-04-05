"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BarChart2, Heart, Search, ShoppingCart } from "lucide-react";

import Navbar from "../navbar";
import logo from "@/public/images/Logo.svg";
import { Button } from "@/components/ui/button";
import { header_select_data } from "@/constants";
import RegisterModal from "@/components/shared/register-modal";

const Header = () => {
  const [userSign, setUserSign] = useState(false);

  return (
    <div className="container">
      <Navbar />
      <div className="flex items-center justify-between gap-10 border-b border-gray-300 py-4">
        <Image src={logo} alt="logo" />

        <div className="flex items-center gap-4 rounded-full border border-[#F8F7F3] bg-[#D5D1E1]">
          <div className={"flex gap-4 rounded-full bg-white"}>
            <select className="w-3/4 rounded-full border bg-[#EFEFEF] p-2 text-gray-600">
              <option selected disabled>
                Все категории
              </option>
              {header_select_data.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>

            <input className="w-full rounded-full border border-none bg-transparent p-2 px-3 outline-none" type="text" placeholder="Поиск" />
          </div>

          <Search className={"mr-4 !h-5 !w-5 text-gray-500"} />
        </div>

        <div className="flex items-center justify-between gap-10">
          <h3>
            Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
          </h3>

          <div className={"flex flex-col items-center justify-center"}>
            <BarChart2 />
            <h2>Избранное</h2>
          </div>
          <div className={"flex flex-col items-center justify-center"}>
            <Heart />
            <h2>Сравнить</h2>
          </div>
          <div className={"flex flex-col items-center justify-center"}>
            <Link href={"/corsica"}>

            <ShoppingCart />
            <h2>Корзина</h2>
            </Link>
          </div>

          <RegisterModal setUserSign={setUserSign} userSign={userSign} />
        </div>
      </div>
      <div className=" flex items-center justify-between border-b border-gray-300 py-4">
        <div className="flex items-center justify-between gap-5">
          <Link href={"/catalogue"}>Каталог</Link>
          <Link href={"/"}>Производители</Link>
          <Link href={"/"}>Кабинеты под ключ</Link>
          <Link href={"/"}>Услуги</Link>
          <Link href={"/"}>Акции</Link>
          <Link href={"/"}>Покупателям</Link>
          <Link href={"/"}>Контакты</Link>
        </div>
        <div className="flex items-center justify-between gap-5 ">
          <Link href={"/"}>Москва</Link>
          <Button className="rounded-full" variant={"outline"}>
            +7(495)000-00-00
          </Button>
          <Button className="rounded-full bg-green-600 hover:bg-green-700">Заказать звонок</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
