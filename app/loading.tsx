import { CircleNotch } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex grow items-center justify-center opacity-30">
      <Image
        src="/symbol.svg"
        alt="logo"
        width={256}
        height={256}
        className="size-28 animate-pulse invert duration-1000"
      />
    </div>
  );
}
