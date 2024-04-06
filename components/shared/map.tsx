import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Map = () => {
  return (
    <div className="container mx-auto mb-10 flex">
      <div className="flex-1 px-8 w-full">
        <iframe className={"w-full h-full"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0728874417764!2d69.1989416871462!3d41.285518128352976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sen!2s!4v1712054566893!5m2!1sen!2s" width="" height="" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="flex-1 flex flex-col gap-4 p-8 bg-white rounded-md">
        <h2 className=" text-xl font-semibold">Остались вопросы?</h2>
        <p className=" text-lg opacity-40">
          Задайте их по номеру телефона +7 (495) <br /> 000-00-00 или оставьте свои координаты и наш <br />
          менеджер перезвонит вам через 10 минут
        </p>
        <Input placeholder="Ваше имя" />
        <Input placeholder="Ваше имя" />
        <Input placeholder="Ваше имя" />
        <Textarea placeholder="Ваше имя" />
        <div className="flex justify-between items-center gap-10">
          <Button className=" border rounded-full bg-[#088269]">Отправить</Button>
          <p className=" ">
            Нажимая Отправить я соглашаюсь c обработкой персональных <br /> данных на условиях <span className=" text-green-600">Политики конфиденциальности.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
