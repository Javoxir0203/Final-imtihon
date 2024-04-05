import Link from "next/link";
import logo from "@/public/icons/footer_logo.svg";
import Image from "next/image";
import { SlSocialVkontakte } from "react-icons/sl";
import { Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import vector from "@/public/icons/Vector.svg";
import vector1 from "@/public/icons/Vector1.svg";
import vector2 from "@/public/icons/Vector2.svg";

const Footer = () => {
  const data = [
    {
      list: ["О компании", "Сертификаты", "Вакансии", "Гарантии", "Услуги", "Акции", "Доставка"]
    },
    { list: ["Оплата", "Возврат", "FAQ", "Лизинг", "Отзывы", "Блог", "Контакты"] }
  ];

  const catalogData = [
    {
      list: ["Реанимация", "Хирургия", "Офтальмология", "Лабораторная диагностика", "Акушерство и Гинекология", "Гистология", "Косметология"]
    },
    {
      list: ["Орториноларингология", "Рентгенология и томография", "Стрерилизация", "Физиотерапия и реабилитация", "Функциональная диагностика", "Эндоскопия"]
    },
    {
      list: ["Новинки", "Распродажи", "Кабинеты под ключ", "Скачать каталог"]
    }
  ];

  return (
    <div className="bg-[#088269] py-11 text-white">
      <div className="container mx-auto">
        <div className="flex items-start justify-between gap-10 mb-5">
          <div className="">
            <h2 className="text-lg font-bold">Покупателям</h2>
            <hr className="border-t-2 border-gray-300 my-2" />
            <div className="flex items-start gap-20">
              {data.map((item, index) => (
                <ul key={index} className="flex flex-col gap-2">
                  {item.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold">Каталог</h2>
            <hr className="border-t-2 border-gray-300 my-2" />
            <div className="flex items-start justify-between gap-8">
              {catalogData.map((item, index) => (
                <ul key={index} className="flex flex-col gap-2">
                  {item.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="text-lg font-bold">Контакты</h2>
            <hr className="border-t-2 border-gray-300 my-2" />
            <div>
              <h2 className="text-lg font-bold">Адрес:</h2>
              <Link href={"/"}> г. Москва, ул. Московская, д. 35 </Link>
              <p>Карта проезда</p>
              <p className="my-2">
                График работы: <br /> Пн-Пт с 09:00-19:00, <br /> Сб-Вс - выходной
              </p>
              <div>
                <Link href={"/"}>+7 000-000-00-00</Link>
                <br />
                <Link href={"/"}>+7 495-000-00-00</Link>
                <br />
                <Link href={"/"}>8 800-000-00-00</Link>
                <br />
                <Link href={"/"}>info@mail.ru</Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className=" flex items-center justify-between  mb-5">
          <div>
            <Image src={logo} alt={""} />
            <h3> OOO «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</h3>
          </div>
          <div>
            <h3 className=" text-lg mb-3">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <SlSocialVkontakte color="#088269" className="w-10 bg-white text-[#088269] h-8 border rounded " />
              <Send className="w-10  bg-white text-[#088269] h-8 border rounded " />
              <FaWhatsapp className=" w-10 h-8   bg-white text-[#088269] border rounded " />
            </div>
          </div>
          <div>
            <p>Партнерская программа</p>
            <p>Оптовые продажи</p>
            <p>Реквизиты</p>
          </div>
          <div>
            <p>Политика конфиденциальности</p>
            <p>Условия соглашения</p>
            <p>Карта сайта</p>
          </div>
          <div>
            <h3 className=" text-lg mb-3">Cпocoбы оплаты</h3>
            <div className="flex gap-5">
              <Image src={vector} alt={""} />
              <Image src={vector1} alt={""} />
              <Image src={vector2} alt={""} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-20">
          <p className=" w-1/5">© 2022 Медоборудование Все права защищены</p>
          <p className=" text-sm">Информация на данном сайте носит справочный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
