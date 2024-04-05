"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import email from "@/public/images/email.svg";

const Inputs = () => {
  return (
    <div className="bg-[#E5E4ED] w-full">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center ">
        <Image src={email} alt="email" width={500} height={500} />
        <div className="p-5 space-y-5">
          <h1 className="text-[#202020] font-medium text-3xl">Подпишитесь и будьте в курсе!</h1>
          <br />
          <span className="text-[#7A7687] font-medium text-base">Акции, скидки, распродажи ждут!</span>
          <form action="" className="space-y-5">
            <div className="w-[80%] border border-[#D5D1E1] bg-[#F8F7F3] rounded-[50px] flex justify-between">
              <input placeholder="Введите email" className="outline-none bg-inherit rounded-[50px] px-[20px] py-[11px]" type="text" name="" id="" />
              <Button className="h-full border rounded-full py-3 bg-[#088269]">Подписаться</Button>
            </div>

            <div className="space-x-2 flex items-center">
              <input className="border border-[#D5D1E1]" type="checkbox" name="" id="" />
              <p>Я даю согласие на обработку своих персональных данных.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
