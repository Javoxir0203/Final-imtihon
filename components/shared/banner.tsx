"use client";
import vector from "@/public/images/banner.svg";
import Image from "next/image";
import { Button } from "../ui/button";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="container p-0 m-0 mx-auto bg-[#E5E4ED] rounded-md my-8">
      <Carousel plugins={[plugin.current]} opts={{ align: "start", loop: true }} className="w-full relative">
        <CarouselContent>
          <CarouselItem className={"flex gap-4 w-full"}>
            <div className="flex w-2/5 flex-col p-8 gap-8">
              <h1 className="text-5xl">Заголовок баннерав пару строк</h1>
              <p className="text-lg text-[#7A7687]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              <div className="flex gap-4">
                <Button className="rounded-full bg-[#088269] hover:bg-[#088269]/90 text-white">Запросить цену</Button>
                <Button className="border border-[#088269] rounded-full hover:text-white text-[#088269] bg-transparent hover:bg-[#088269]">B каталог</Button>
              </div>
            </div>

            <div className={"flex-1 relative"}>
              <Image src={vector} alt={"asasas"} className="!w-full absolute z-50 top-0 right-0 bottom-0 !h-full object-center object-fill" width={100} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem className={"flex gap-4 w-full"}>
            <div className="flex w-2/5 flex-col p-8 gap-8">
              <h1 className="text-5xl">Заголовок баннерав пару строк</h1>
              <p className="text-lg text-[#7A7687]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              <div className="flex gap-4">
                <Button className="rounded-full bg-[#088269] hover:bg-[#088269]/90 text-white">Запросить цену</Button>
                <Button className="border border-[#088269] rounded-full hover:text-white text-[#088269] bg-transparent hover:bg-[#088269]">B каталог</Button>
              </div>
            </div>

            <div className={"flex-1 relative"}>
              <Image src={vector} alt={"asasas"} className="!w-full absolute z-50 top-0 right-0 bottom-0 !h-full object-center object-fill" width={100} height={100} />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Banner;
