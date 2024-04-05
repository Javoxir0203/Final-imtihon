import Image from "next/image";
import Photo from "@/public/images/Photo.svg";
import Photo1 from "@/public/images/Photo1.svg";
import Photo2 from "@/public/images/Photo2.svg";
import Photo3 from "@/public/images/Photo3.svg";
import Photo4 from "@/public/images/Photo4.svg";
import Photo5 from "@/public/images/Photo5.svg";
import Photo77 from "@/public/images/Photo77.svg";

import { Button } from "../ui/button";

const Section = () => {
  const data = [
    {image: Photo,title: "Дерматология"},
    { image: Photo1,title: "Косметология"},
    {image: Photo4,title: "Дерматология"},
    { image: Photo5, title: "Косметология"
    }
  ];

  return (
    <div className="container mx-auto flex flex-col items-center justify-between mt-5 mb-10 min-h-[50vh]">
      <div className="flex items-center h-full w-full justify-between mb-5">
        <h2 className="text-3xl font-medium">Популярные категории</h2>
        <Button className="border rounded-full p-3 bg-green-600 hover:bg-green-700 text-white">Bce категории</Button>
      </div>

      <div className="grid flex-1 grid-cols-4 gap-5 w-full h-full">
        <div className="flex flex-col gap-4 w-full h-full">
          <div className="rounded-lg w-full h-full border border-gray-500/20 flex flex-col bg-[#F8F7F3]">
            <div className="relative w-full h-full  bg-[#fff]">
              <Image src={Photo2} alt={""} fill />
            </div>
            <h2 className="text-center py-4">Дерматологическое оборудование</h2>
          </div>

          <div className="rounded-lg w-full h-full border border-gray-500/20 flex flex-col bg-[#F8F7F3]">
            <div className="relative w-full h-full bg-[#fff]">
              <Image src={Photo3} alt={""} fill />
            </div>
            <h2 className="text-center py-4">Дерматологическое оборудование</h2>
          </div>
        </div>

        <div className="rounded-lg border border-gray-500/20 flex flex-col bg-[#F8F7F3]">
          <div className="relative w-full h-full  bg-[#fff]">
            <Image src={Photo77} alt={""} fill />
          </div>
          <h2 className="text-center py-4">Дерматологическое оборудование</h2>
        </div>

        <div className="col-span-2 w-full h-full">
          <div className="grid w-full h-full grid-cols-2 gap-5 mb-5">
            {data.map(item => (
              <div className="rounded-lg border border-gray-500/20 flex flex-col bg-[#F8F7F3]">
                <div className="relative w-full h-full bg-[#fff]">
                  <Image src={item.image} alt={""} fill />
                </div>
                <h2 className="text-center py-4">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
