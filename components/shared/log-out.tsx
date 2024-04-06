"use client";

import { LogOut } from "lucide-react";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import React from "react";

const LogOutModal = ({ userSign, setUserSign }: { userSign: boolean; setUserSign: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUserSign(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <LogOut className={"cursor-pointer"} />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogOut}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogOutModal;
