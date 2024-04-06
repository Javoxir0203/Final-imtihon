import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex container items-center py-4 !px-0 justify-between border-b border-gray-300">
      <div className="flex items-center justify-between gap-4 text-muted-foreground">
        <Link href={"/"}>O компании</Link>
        <Link href={"/"}>Доставка</Link>
        <Link href={"/"}>Оплата</Link>
        <Link href={"/"}>Гарантии</Link>
        <Link href={"/"}>Блог</Link>
      </div>
      <div className="flex items-center gap-10">
        <Link href={"/"}>info@mail.ru</Link>
        <Link href={"/"}> Г. Москва, ул. Московская, д. 35</Link>
      </div>
    </div>
  );
};

export default Navbar;
