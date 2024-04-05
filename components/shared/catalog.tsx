"use client";
import { Heart, BarChart2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { catalog_carousel_data } from "@/constants";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Catalog = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <div className="container mx-auto flex gap-24 py-12">
      <div className="flex flex-col justify-start min-w-max">
        <h2 className="text-2xl font-bold mb-4">Каталог товаров</h2>
        <p className="mb-2">Хиты продаж</p>
        <p className="mb-2">Новинки</p>
        <p className="mb-2">Акции</p>
      </div>

      <div className="flex w-full overflow-x-hidden">
        <Carousel plugins={[plugin.current]} opts={{ align: "start", loop: true, duration: 50 }} className="w-full">
          <CarouselContent className={""}>
            {catalog_carousel_data.map((item, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="rounded-lg flex flex-col gap-2 h-full border border-gray-500/50">
                  <div className="flex justify-center items-center py-8 flex-1 rounded-lg bg-white relative">
                    <button className="border absolute top-3 left-3 rounded-full px-4 py-1 bg-green-200 text-green-700">Новинка</button>

                    <div className="flex gap-2 absolute top-3 right-3">
                      <BarChart2 className="" size="24" />
                      <Heart className="" size="24" />
                    </div>

                    <Image src={item.image} className="" width={150} height={150} alt="" />
                  </div>

                  <div className="bg-[#F8F7F3] flex-1 p-6 flex flex-col justify-between gap-4 rounded-lg w-full">
                    <h2 className="text-lg max-w-[70%] font-semibold">{item.title}</h2>
                    <p className="text-sm">{item.sub_description}</p>
                    <p className="text-sm">{item.description}</p>
                    <p className="text-2xl font-semibold">{item.price}</p>
                    <Button variant={"outline"} className="text-[#088269] bg-transparent border border-[#088269] w-full px-4 py-2 rounded-full hover:bg-[#088269] hover:text-white transition duration-300 ease-in-out">
                      Добавить в корзину
                    </Button>
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

            <Button variant={"outline"} className={"border border-[#088269] text-[#088269] rounded-full bg-transparent py-2 hover:bg-[#088269]"}>
              Бесплатная консультация
            </Button>
            <Button className={"border rounded-full bg-[#088269] py-2 hover:bg-[#088269]/70 text-white"}>Сертификаты</Button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Catalog;
