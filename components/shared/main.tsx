"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "../ui/button";
import { main_aruosel_data } from "@/constants";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const Main = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="container my-12">
      <h2 className="mb-10 text-3xl font-medium">Комплексное оснащение кабинетов</h2>
      <Carousel plugins={[plugin.current]} opts={{ align: "start", loop: true, duration: 50 }} className="w-full">
        <CarouselContent>
          {main_aruosel_data.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="flex h-full flex-col rounded-md">
                <div className="flex-3 relative flex h-full items-center justify-center rounded-b-none">
                  <Image className={"w-full"} src={item.image} alt={item.title} width={400} height={400} />
                </div>

                <h2 className="text-md border-t-none flex flex-1 rounded-md rounded-t-none border border-gray-500/20 p-4 text-muted-foreground">{item.title}</h2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className={"my-8 flex items-center gap-24"}>
          <div className={"relative left-0"}>
            <CarouselNext className={"absolute left-10"} />
            <CarouselPrevious className={"absolute left-0"} />
          </div>

          <Button variant={"outline"} className={"rounded-full border border-[#088269] bg-transparent py-2 text-[#088269]  hover:bg-[#088269] "}>
            Бесплатная консультация
          </Button>
          <Button className={"rounded-full border bg-green-600 py-2  text-white hover:bg-green-800"}>Рассчитать стоимость</Button>
        </div>
      </Carousel>
    </div>
  );
};

export default Main;
