"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LogOut, User } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import LogOutModal from "@/components/shared/log-out";

const RegisterModal = ({ userSign, setUserSign }: { userSign: boolean; setUserSign: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const email = data.get("email");
    const password = data.get("password");

    localStorage.setItem("user", JSON.stringify({ email, password }));
    setUserSign(true);
  };

  const user: any = JSON.parse(localStorage.getItem("user") as string) || null;

  return (
    <Dialog>
      {user ? (
        <LogOutModal userSign={userSign} setUserSign={setUserSign} />
      ) : (
        <DialogTrigger className={"flex cursor-pointer flex-col items-center justify-center"}>
          <User />
          <h2>Войти</h2>
        </DialogTrigger>
      )}
      <DialogContent>
        <form onSubmit={handleRegister} className="flex flex-col gap-8 p-12">
          <h2>Регистрация</h2>
          <Input required name="email" placeholder="email" className="p-4" />

          <Input required name="password" placeholder="password" className="p-4" />

          <div className="flex items-center space-x-2">
            <Checkbox required id="terms" />
            <label htmlFor="terms" className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Запомнить
            </label>
          </div>

          <DialogClose asChild>
            <Button className={"w-full rounded-full bg-[#088269]"} type="submit">
              Регистрация
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
