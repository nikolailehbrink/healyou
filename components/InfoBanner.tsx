import { Info } from "@phosphor-icons/react/dist/ssr";

export default function InfoBanner({ ...props }) {
  return (
    <div
      {...props}
      className="mx-auto flex max-w-3xl items-center gap-2 rounded-full bg-[hsl(21,100%,66%)] px-3 py-2 text-sm text-background"
    >
      <Info weight="duotone" size={20} />
      <p>
        This site is for initial guidance only, not a substitute for a
        professional&apos;s advice.
      </p>
    </div>
  );
}
