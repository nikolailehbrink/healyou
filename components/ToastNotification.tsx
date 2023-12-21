"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

type Props = {
  message: string;
  type?: "success" | "error" | null | string;
};

export default function ToastNotification({ message, type = null }: Props) {
  useEffect(() => {
    switch (type) {
      case "error":
        toast.error(message);
        break;

      case "success":
        toast.success(message);
        break;
      default:
        toast(message);
    }
  });
  return null;
}
