"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { client_carousel_data } from "@/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Client = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className={"bg-[#E1DFE7]"}>
      <div className="container flex flex-col gap-8 mx-auto mb-10">
        <div className="flex items-center justify-between my-8">
          <h2 className="text-xl font-normal">Наши клиенты</h2>
          <h2 className="text-3xl font-semibold">
            БОЛЕЕ <span className="text-green-600">5000</span> <br /> УСПЕШНЫХ ПРОЕКТОВ
          </h2>
        </div>

        <Carousel plugins={[plugin.current]} opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className={""}>
            {client_carousel_data.map((item, index) => (
              <CarouselItem key={index} className="basis-auto min-h-[30vh] border-none">
                <div className="h-full flex flex-col rounded-md border-[1px] border-gray-500/50">
                  <div className="relative bg-white border-b-[1px] border-gray-500/50 h-full rounded-md rounded-b-none flex-3 flex items-center justify-center">
                    <Image src={item.image} alt={item.title} width={200} height={200} />
                  </div>
                  <div className={"text-md rounded-md font-normal bg-[#F8F7F3] p-4 flex flex-wrap flex-1"}>
                    <h2 className="max-w-[80%]">{item.title}</h2>
                  </div>
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

export default Client;
