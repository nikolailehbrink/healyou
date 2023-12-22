import Image from "next/image";

export default function Footer() {
  return (
    <footer className="my-4 mb-12 rounded-3xl bg-background text-muted-foreground">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image width={114} height={36} alt="logo" src={"/healyou.svg"} />
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium sm:mb-0">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-t-2 border-muted-foreground/10 sm:mx-auto lg:my-8" />
        <span className="block text-sm  sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            HealYou™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
