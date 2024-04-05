"use client";

import { useRef } from "react";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { famous_carousel_data } from "@/constants";

const Famous = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="container bg-[#F8F7F3] mx-auto overflow-x-hidden flex gap-24 py-12">
      <div className="min-w-max">
        <h2 className="text-2xl font-bold mb-4">Бренды</h2>
        <p className="text-sm w-full text-muted-foreground">Эксклюзивные поставщики</p>
      </div>

      <div className="flex-1">
        <Carousel plugins={[plugin.current]} opts={{ align: "start", loop: true, duration: 50 }} className="w-full">
          <CarouselContent className={""}>
            {famous_carousel_data.map((item, index) => (
              <CarouselItem key={index} className="basis-auto min-h-[30vh] border-none">
                <div className="h-full flex flex-col rounded-md border-[1px] border-gray-500/50">
                  <div className="relative bg-white border-b-[1px] border-gray-500/50 h-full rounded-md rounded-b-none flex-3 flex items-center justify-center">
                    <Image src={item.image} alt={item.title} width={200} height={200} />
                  </div>

                  <h1 className="text-md max-w-[80%] font-normal p-4 flex flex-wrap flex-1">{item.title}</h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className={"flex items-center my-8 gap-24"}>
            <div className={"relative left-0"}>
              <CarouselNext className={"absolute left-10"} />
              <CarouselPrevious className={"absolute left-0"} />
            </div>

            <Button className={"border rounded-full bg-green-600 py-2 w-40 hover:bg-green-800 text-white"}>Сертификаты</Button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Famous;
